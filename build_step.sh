#!/bin/bash

echo "~~~~~ Build Script ~~~~~"

set -e

npm ci

rm -rf dist

npm run build
