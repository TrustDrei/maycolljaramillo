#!/usr/bin/env node
import { cpSync, existsSync } from 'node:fs';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const src = resolve('.vercel/output/functions/_render.func/dist/server');
const dest = resolve('dist/server');

if (!existsSync(src)) {
  console.warn('[vercel-fix] Source not found:', src);
  process.exit(0);
}

if (!existsSync(dirname(dest))) {
  mkdirSync(dirname(dest), { recursive: true });
}

try {
  cpSync(src, dest, { recursive: true });
  console.log('[vercel-fix] Copied server bundle to dist/server for legacy runtimes.');
} catch (err) {
  console.warn('[vercel-fix] Copy failed:', err);
}
