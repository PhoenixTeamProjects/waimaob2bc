#!/usr/bin/env bash
set -euo pipefail

echo "Project: waimaob2bc"
echo "PWD: $(pwd)"
echo "Node: $(node -v)"
echo "NPM: $(npm -v)"

npm ci
npm run typecheck
npm run build

test -f frontend/out/index.html
test -d frontend/out/_next

echo "Hostinger build output is ready: frontend/out"
