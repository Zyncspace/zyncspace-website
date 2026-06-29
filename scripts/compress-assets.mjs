/**
 * Compress raster assets under assets/ before static export.
 * Runs in CI/deploy to keep image payloads small without changing URLs.
 */
import { readdir, readFile, stat, unlink, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import sharp from 'sharp';

const ASSETS_ROOT = join(process.cwd(), 'assets');
const PATCH_ROOTS = ['app', 'components', 'content', 'lib'];
const PATCH_EXT = new Set(['.ts', '.tsx', '.json', '.mdx', '.md']);
const RASTER_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp']);
const SKIP_DIRS = new Set(['images-compressed', 'node_modules', '.git']);
const MIN_SAVINGS_BYTES = 512;
const WEBP_THRESHOLD_BYTES = 350_000;
const WEBP_MIN_IMPROVEMENT = 0.25;

/** Display images - cap width; favicons/logos stay native size. */
const MAX_WIDTH = {
  default: 1536,
  favicon: null,
  logo: 512,
};

const PNG = { compressionLevel: 9, effort: 10, palette: false };
const JPEG = { quality: 82, mozjpeg: true };
const WEBP = { quality: 82, effort: 6 };

async function walk(dir, files = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      await walk(fullPath, files);
      continue;
    }
    const ext = entry.name.slice(entry.name.lastIndexOf('.')).toLowerCase();
    if (RASTER_EXT.has(ext)) files.push(fullPath);
  }
  return files;
}

function maxWidthFor(relPath) {
  const normalized = relPath.split(sep).join('/');
  if (normalized.includes('/favicon/') || normalized.includes('/favicon.')) {
    return MAX_WIDTH.favicon;
  }
  if (/logo/i.test(normalized)) {
    return MAX_WIDTH.logo;
  }
  return MAX_WIDTH.default;
}

function buildPipeline(input, maxWidth) {
  let pipeline = sharp(input, { failOn: 'none' }).rotate();
  if (maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }
  return pipeline;
}

async function encodeRaster(input, ext, maxWidth) {
  const pipeline = buildPipeline(input, maxWidth);
  if (ext === '.png') {
    return pipeline.png(PNG).toBuffer();
  }
  if (ext === '.webp') {
    return pipeline.webp(WEBP).toBuffer();
  }
  return pipeline.jpeg(JPEG).toBuffer();
}

async function encodeWebp(input, maxWidth) {
  return buildPipeline(input, maxWidth).webp(WEBP).toBuffer();
}

async function compressFile(filePath) {
  const rel = relative(ASSETS_ROOT, filePath);
  const before = (await stat(filePath)).size;
  const input = await readFile(filePath);
  const ext = filePath.slice(filePath.lastIndexOf('.')).toLowerCase();
  const maxWidth = maxWidthFor(rel);

  let output = await encodeRaster(input, ext, maxWidth);
  let finalPath = filePath;
  let format = ext.slice(1);

  const shouldTryWebp =
    (ext === '.png' || ext === '.jpg' || ext === '.jpeg') &&
    (before >= WEBP_THRESHOLD_BYTES || output.length >= WEBP_THRESHOLD_BYTES);

  if (shouldTryWebp) {
    const webpOutput = await encodeWebp(input, maxWidth);
    const webpImprovement = 1 - webpOutput.length / output.length;
    if (
      webpOutput.length + MIN_SAVINGS_BYTES < output.length &&
      webpImprovement >= WEBP_MIN_IMPROVEMENT
    ) {
      output = webpOutput;
      finalPath = filePath.replace(/\.(png|jpe?g)$/i, '.webp');
      format = 'webp';
    }
  }

  const after = output.length;
  const saved = before - after;

  if (saved < MIN_SAVINGS_BYTES) {
    return { rel, before, after: before, saved: 0, skipped: true, format: ext.slice(1) };
  }

  await writeFile(finalPath, output);
  if (finalPath !== filePath) {
    await unlink(filePath);
    return {
      rel,
      before,
      after,
      saved,
      skipped: false,
      format,
      converted: `${ext.slice(1)} → webp`,
      newRel: relative(ASSETS_ROOT, finalPath),
    };
  }

  return { rel, before, after, saved, skipped: false, format };
}

async function walkSourceFiles(dir, files = []) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return files;
  }
  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkSourceFiles(fullPath, files);
      continue;
    }
    const ext = entry.name.slice(entry.name.lastIndexOf('.')).toLowerCase();
    if (PATCH_EXT.has(ext)) files.push(fullPath);
  }
  return files;
}

async function patchReferences(conversions) {
  if (!conversions.length) return [];

  const sourceFiles = [];
  for (const root of PATCH_ROOTS) {
    await walkSourceFiles(join(process.cwd(), root), sourceFiles);
  }

  const patched = [];
  for (const file of sourceFiles) {
    const original = await readFile(file, 'utf8');
    let next = original;
    for (const { from, to } of conversions) {
      const fromAsset = `/assets/${from.split(sep).join('/')}`;
      const toAsset = `/assets/${to.split(sep).join('/')}`;
      next = next.split(fromAsset).join(toAsset);
    }
    if (next !== original) {
      await writeFile(file, next, 'utf8');
      patched.push(relative(process.cwd(), file));
    }
  }
  return patched;
}

async function main() {
  const files = await walk(ASSETS_ROOT);
  if (!files.length) {
    console.log('compress-assets: no raster files found under assets/');
    return;
  }

  let totalBefore = 0;
  let totalAfter = 0;
  let compressed = 0;
  const rows = [];
  const conversions = [];

  for (const file of files.sort()) {
    const result = await compressFile(file);
    totalBefore += result.before;
    totalAfter += result.after;
    if (!result.skipped) compressed += 1;
    rows.push(result);
    if (result.converted && result.newRel) {
      conversions.push({ from: result.rel, to: result.newRel });
    }
  }

  const totalSaved = totalBefore - totalAfter;
  const pct = totalBefore > 0 ? ((totalSaved / totalBefore) * 100).toFixed(1) : '0.0';

  console.log('compress-assets: summary');
  console.log(`  files scanned:  ${files.length}`);
  console.log(`  files updated:  ${compressed}`);
  console.log(`  before:         ${formatBytes(totalBefore)}`);
  console.log(`  after:          ${formatBytes(totalAfter)}`);
  console.log(`  saved:          ${formatBytes(totalSaved)} (${pct}%)`);

  if (conversions.length) {
    console.log('');
    console.log('  format conversions:');
    for (const { from, to } of conversions) {
      console.log(`    /assets/${from} → /assets/${to}`);
    }
    const patched = await patchReferences(conversions);
    if (patched.length) {
      console.log('');
      console.log('  updated references in:');
      for (const file of patched) {
        console.log(`    - ${file}`);
      }
    }
  }

  console.log('');
  for (const row of rows.filter((r) => !r.skipped && r.saved > 0)) {
    const suffix = row.converted ? ` [${row.converted}]` : '';
    console.log(
      `  - ${row.rel}: ${formatBytes(row.before)} → ${formatBytes(row.after)} (−${formatBytes(row.saved)})${suffix}`,
    );
  }

  if (process.env.GITHUB_STEP_SUMMARY) {
    const lines = [
      '### Asset compression',
      '',
      '| Metric | Value |',
      '| --- | --- |',
      `| Files scanned | ${files.length} |`,
      `| Files updated | ${compressed} |`,
      `| Before | ${formatBytes(totalBefore)} |`,
      `| After | ${formatBytes(totalAfter)} |`,
      `| Saved | ${formatBytes(totalSaved)} (${pct}%) |`,
      '',
    ];
    if (conversions.length) {
      lines.push('**Format conversions**', '');
      for (const { from, to } of conversions) {
        lines.push(`- \`/assets/${from}\` → \`/assets/${to}\``);
      }
      lines.push('');
    }
    const top = rows
      .filter((r) => r.saved > 0)
      .sort((a, b) => b.saved - a.saved)
      .slice(0, 12);
    if (top.length) {
      lines.push('| File | Before | After | Saved |', '| --- | --- | --- | --- |');
      for (const row of top) {
        lines.push(
          `| \`${row.rel}\` | ${formatBytes(row.before)} | ${formatBytes(row.after)} | ${formatBytes(row.saved)} |`,
        );
      }
    }
    await writeFile(process.env.GITHUB_STEP_SUMMARY, `${lines.join('\n')}\n`, { flag: 'a' });
  }
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

main().catch((error) => {
  console.error('compress-assets failed:', error);
  process.exit(1);
});
