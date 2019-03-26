@ECHO OFF
color 0a
	
GOTO cordova_plugin_inappbrowser
GOTO cordova_plugin_dialogs
GOTO cordova_plugin_statusbar
GOTO cordova_plugin_splashscreen
	
:cordova_plugin_inappbrowser
	TITLE cordova-plugin-inappbrowser
	call npm install --save @ionic-native/in-app-browser
	call ionic cordova plugin add cordova-plugin-inappbrowser --save
	
:cordova_plugin_dialogs
	TITLE cordova-plugin-dialogs
	call npm install --save @ionic-native/dialogs
	call ionic cordova plugin add cordova-plugin-dialogs --save
	
:cordova_plugin_statusbar
	TITLE cordova-plugin-statusbar
	call npm install --save @ionic-native/status-bar
	call ionic cordova plugin add cordova-plugin-statusbar --save
	
:cordova_plugin_splashscreen
	TITLE cordova-plugin-splashscreen
	call npm install --save @ionic-native/splash-screen
	call ionic cordova plugin add cordova-plugin-splashscreen --save
	
GOTO :EOF
	
