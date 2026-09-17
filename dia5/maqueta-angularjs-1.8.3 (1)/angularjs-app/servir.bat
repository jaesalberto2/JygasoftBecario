@echo off
REM Levanta un servidor estatico en http://localhost:8080
cd /d "%~dp0"

where python >nul 2>nul
if %errorlevel%==0 (
  echo Servidor en http://localhost:8080  ^(Ctrl+C para detener^)
  python -m http.server 8080
  goto :eof
)

where npx >nul 2>nul
if %errorlevel%==0 (
  npx --yes http-server -p 8080 -c-1 .
  goto :eof
)

echo Instale Python 3 o Node.js para poder servir el proyecto.
pause
