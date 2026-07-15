#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="${PROJECT_ROOT:-/opt/websites/waimaob2bc}"

echo "This script creates the VPS support directory framework only."
echo "Target: ${PROJECT_ROOT}"
echo "It does not install services, write secrets, or delete data."

mkdir -p "${PROJECT_ROOT}/directus/uploads"
mkdir -p "${PROJECT_ROOT}/directus/extensions"
mkdir -p "${PROJECT_ROOT}/directus/snapshots"
mkdir -p "${PROJECT_ROOT}/directus/logs"
mkdir -p "${PROJECT_ROOT}/database/postgres-data"
mkdir -p "${PROJECT_ROOT}/nginx/backups"
mkdir -p "${PROJECT_ROOT}/backups/database"
mkdir -p "${PROJECT_ROOT}/backups/uploads"
mkdir -p "${PROJECT_ROOT}/backups/env"
mkdir -p "${PROJECT_ROOT}/backups/nginx"
mkdir -p "${PROJECT_ROOT}/backups/directus-schema"
mkdir -p "${PROJECT_ROOT}/logs"

echo "VPS framework created."
