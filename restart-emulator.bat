@ECHO OFF
color 0a
GOTO kill_app
pause
	
:kill_app
	ECHO.
	ECHO.
	ECHO  Ionic Mobile App Builder by Code Generator
	ECHO   ________  ___  ___   ______       _ _     _     ______
	ECHO  ^|_   _^|  \/  ^| / _ \  ^| ___ \     ^(_^) ^|   ^| ^|    ^| ___ \ 
	ECHO    ^| ^| ^| .  . ^|/ /_\ \ ^| ^|_/ /_   _ _^| ^| __^| ^| ___^| ^|_/ /____
	ECHO    ^| ^| ^| ^|\/^| ^|^|  _  ^| ^| ___ \ ^| ^| ^| ^| ^|/ _` ^|/ _ \    /^|_  /
	ECHO   _^| ^|_^| ^|  ^| ^|^| ^| ^| ^| ^| ^|_/ / ^|_^| ^| ^| ^| (_^| ^|  __/ ^|\ \ / /
	ECHO   \___/\_^|  ^|_/\_^| ^|_/ \____/ \__,_^|_^|_^|\__,_^|\___\_^| \_/___^|
	ECHO   Easy Creating Your Own Apps Without Coding
	ECHO   - Ionic - Joomla - Drupal - WordPress - PHP/MySQL -
	ECHO.
	ECHO.
	ECHO clean the process that will be needed
	TITLE Clean The Process
	for /f "tokens=5" %%a in ('NETSTAT -aon ^| find ":8101" ^| find "LISTENING"') do TASKKILL /f /pid %%a
	for /f "tokens=5" %%a in ('NETSTAT -aon ^| find ":8102" ^| find "LISTENING"') do TASKKILL /f /pid %%a
	for /f "tokens=5" %%a in ('NETSTAT -aon ^| find ":8103" ^| find "LISTENING"') do TASKKILL /f /pid %%a
	TASKKILL /F /IM java.exe
	TASKKILL /F /IM node.exe
	GOTO run_emulator
:run_emulator
	ECHO run emulator
	TITLE Run Emulator
	ionic serve --port 8101 --lab-port 8102 --dev-logger-port 8103 --lab --no-open
GOTO :EOF
	
