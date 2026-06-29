import { existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const nextDir = '.next';

if (!existsSync(nextDir)) {
  process.exit(0);
}

const exportMarkers = ['export-detail.json', 'export-marker.json', 'images-manifest.json'];

const hasExportArtifacts = exportMarkers.some((file) => existsSync(join(nextDir, file)));
const missingDevServer =
  !existsSync(join(nextDir, 'server')) && existsSync(join(nextDir, 'BUILD_ID'));

if (hasExportArtifacts || missingDevServer) {
  console.log('Clearing stale .next cache (incompatible with next dev)…');
  rmSync(nextDir, { recursive: true, force: true });
}
