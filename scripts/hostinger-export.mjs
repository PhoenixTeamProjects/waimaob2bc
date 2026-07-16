import { cpSync, existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const source = resolve('frontend/out');
const target = resolve('out');

if (!existsSync(source)) {
  throw new Error(`Hostinger export source not found: ${source}`);
}

if (existsSync(target)) {
  rmSync(target, { recursive: true, force: true });
}

cpSync(source, target, { recursive: true });

console.log(`Hostinger static output synced: ${source} -> ${target}`);
