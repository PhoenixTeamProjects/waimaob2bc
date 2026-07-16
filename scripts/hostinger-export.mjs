import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

function syncDirectory(sourcePath, targetPath, label) {
  const source = resolve(sourcePath);
  const target = resolve(targetPath);

  if (!existsSync(source)) {
    throw new Error(`Hostinger ${label} source not found: ${source}`);
  }

  if (existsSync(target)) {
    rmSync(target, { recursive: true, force: true });
  }

  cpSync(source, target, { recursive: true });
  console.log(`Hostinger ${label} synced: ${source} -> ${target}`);
}

syncDirectory('frontend/.next', '.next', 'Next.js output');

syncDirectory('frontend/.next/static', '.next/standalone/frontend/.next/static', 'Next.js standalone static assets');

const publicSource = resolve('frontend/public');
if (existsSync(publicSource)) {
  syncDirectory('frontend/public', '.next/standalone/frontend/public', 'Next.js standalone public assets');
}

const standaloneEntry = resolve('.next/standalone/frontend/server.js');
if (!existsSync(standaloneEntry)) {
  throw new Error(`Hostinger standalone server entry not found: ${standaloneEntry}`);
}

mkdirSync(resolve('.next'), { recursive: true });
writeFileSync(
  resolve('.next/server.js'),
  "require('./standalone/frontend/server.js');\n",
  'utf8'
);

console.log(`Hostinger standalone entry created: ${resolve('.next/server.js')}`);
