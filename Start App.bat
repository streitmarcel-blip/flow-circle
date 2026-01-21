@echo off
echo ============================
echo Starte FlowCircle...
echo ============================

cd /d "%~dp0"

echo Installiere Updates (falls noetig)...
call npm install

echo.
echo Starte Server...
call npm run dev -- --open

echo.
echo ============================
echo FERTIG. Fenster schliesst.
echo ============================
pause
