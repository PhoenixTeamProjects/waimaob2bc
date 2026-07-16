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

syncDirectory('frontend/.next', '.next', 'Next.js output');

syncDirectory('frontend/out', 'out', 'static export output');

if (!existsSync(resolve('out/index.html'))) {
  throw new Error(`Hostinger static export homepage not found: ${resolve('out/index.html')}`);
}
