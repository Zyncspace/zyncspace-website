#!/usr/bin/env node
/** Fail fast if Node version does not match .nvmrc / package.json engines */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const required = readFileSync(join(root, '.nvmrc'), 'utf8').trim();
const current = process.version.replace(/^v/, '');

if (current !== required) {
  console.error(`Node v${required} required (.nvmrc). Current: v${current}`);
  console.error('Run: nvm use');
  process.exit(1);
}
