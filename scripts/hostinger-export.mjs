import { cpSync, existsSync, rmSync } from 'node:fs';
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

syncDirectory('frontend/out', '.next', 'static export output');

if (!existsSync(resolve('.next/index.html'))) {
  throw new Error(`Hostinger static export homepage not found: ${resolve('.next/index.html')}`);
}

const publicSource = resolve('frontend/public');
if (existsSync(publicSource)) {
  syncDirectory('frontend/public', 'public', 'public assets');
}
