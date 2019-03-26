import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {PipesModule} from '../pipes/pipes.module.ts';
import {HttpClientModule} from '@angular/common/http';
import {InAppBrowser} from "@ionic-native/in-app-browser/ngx";
import {Dialogs} from "@ionic-native/dialogs/ngx";

import {BrowserModule} from '@angular/platform-browser';
import {Test} from "./app.component";

import {AboutUsPage} from "../pages/about-us/about-us";
import {FaqsPage} from "../pages/faqs/faqs";
import {HomePage} from "../pages/home/home";
import {PrivacyPolicyPage} from "../pages/privacy-policy/privacy-policy";

import {StatusBar} from "@ionic-native/status-bar/ngx";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";


@NgModule({
	declarations: [
		Test,
		AboutUsPage,
		FaqsPage,
		HomePage,
		PrivacyPolicyPage,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(Test),
		PipesModule,
		HttpClientModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		Test,
		AboutUsPage,
		FaqsPage,
		HomePage,
		PrivacyPolicyPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		InAppBrowser,
		Dialogs,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class TestModule {

}
