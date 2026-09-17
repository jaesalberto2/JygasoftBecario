#!/usr/bin/env bash
# Levanta un servidor estático en http://localhost:8080
cd "$(dirname "$0")" || exit 1

if command -v python3 >/dev/null 2>&1; then
  echo "Servidor en http://localhost:8080  (Ctrl+C para detener)"
  python3 -m http.server 8080
elif command -v npx >/dev/null 2>&1; then
  npx --yes http-server -p 8080 -c-1 .
else
  echo "Instale Python 3 o Node.js para poder servir el proyecto."
  exit 1
fi
