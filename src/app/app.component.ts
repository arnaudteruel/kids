import {Component, ViewChild} from "@angular/core";
import {Nav, MenuController, Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar/ngx";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import {InAppBrowser,InAppBrowserOptions} from "@ionic-native/in-app-browser/ngx";

import {AboutUsPage} from "../pages/about-us/about-us";
import {FaqsPage} from "../pages/faqs/faqs";
import {HomePage} from "../pages/home/home";
import {PrivacyPolicyPage} from "../pages/privacy-policy/privacy-policy";

@Component({
	templateUrl: "app.html"
})

export class Test{

	/**
	* Options for the Cordova InAppBrowser Plugin
	* @reference: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/
	**/
	appBrowserOption : InAppBrowserOptions = {
		location : "yes",
		hidden : "no",
		clearcache : "yes",
		clearsessioncache : "yes",
		zoom : "no",
		hardwareback : "yes",
		mediaPlaybackRequiresUserAction : "no",
		shouldPauseOnSuspend : "no",
		closebuttoncaption : "Close",
		disallowoverscroll : "no",
		toolbar : "yes", 
		enableViewportScale : "no",
		allowInlineMediaPlayback : "no",
		presentationstyle : "pagesheet",
		fullscreen : "yes",
	}

	appWebviewOption : InAppBrowserOptions = {
		location : "no",
		hidden : "no",
		clearcache : "yes",
		clearsessioncache : "yes",
		zoom : "no",
		hardwareback : "yes",
		mediaPlaybackRequiresUserAction : "no",
		shouldPauseOnSuspend : "no",
		closebuttoncaption : "Close",
		disallowoverscroll : "no",
		toolbar : "no", 
		enableViewportScale : "no",
		allowInlineMediaPlayback : "no",
		presentationstyle : "pagesheet",
		fullscreen : "yes",
	}
	
	@ViewChild(Nav) nav: Nav;
	
	// make HomePage the root (or first) page
	rootPage: any = HomePage;

	// init variable
	pages: Array<{title: string, component: any}>;
	
	/**
	* Test:constructor()
	**/

	constructor(
		public platform: Platform,
		public statusBar: StatusBar,
		public inAppBrowser: InAppBrowser,
		public splashScreen: SplashScreen,
		public menu: MenuController){
		this.initializeApp();
		this.pages = [
			{ title: 'About Us', component: AboutUsPage },
			{ title: 'FAQs', component: FaqsPage },
			{ title: 'Home', component: HomePage },
			{ title: 'Privacy Policy', component: PrivacyPolicyPage }
		];
	}
	

	/**
	* Test:initializeApp()
	**/
	initializeApp(){
		this.platform.ready().then(() => {
			this.platform.setDir("ltr", true);
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});


	}


	/**
	* Test:goToPage($page)
	* @param string $page = 'about_us|faqs|home|privacy_policy'
	**/

	public goToPage(page: string){
		switch(page){
			case "about_us": 
				this.nav.setRoot(AboutUsPage);
				break;
			case "faqs": 
				this.nav.setRoot(FaqsPage);
				break;
			case "home": 
				this.nav.setRoot(HomePage);
				break;
			case "privacy_policy": 
				this.nav.setRoot(PrivacyPolicyPage);
				break;
		}
		this.menu.close();
	}

	/**
	* Test:openWithAppEmail($email,$subject,$message)
	* @param string $email = 'jasman@ihsana.com'
	* @param string $subject = 'subject'
	* @param string $message = 'your message'
	**/

	public openWithAppEmail(email: string, subject : string, message : string){
		let emailAddr = email || "info@ihsana.com";
		let textSubject = subject || "";
		let textMessage = encodeURI(message) || "";
		let urlSchema = "mailto:" + emailAddr + "?subject=" + textSubject + "&body=" + textMessage;
		this.inAppBrowser.create(urlSchema,"_system");
		this.menu.close();
	}

	/**
	* Test:openWithAppCall($phone_number)
	* @param string $phone_number = '082233333734'
	**/

	public openWithAppCall(phone_number: string){
		let phoneNumber = phone_number || "08123456789";
		let urlSchema = "tel:" + phoneNumber ;
		this.inAppBrowser.create(urlSchema,"_system");
		this.menu.close();
	}

	/**
	* Test:openWithAppSms($phone_number)
	* @param string $phone_number = '082233333734'
	* @param string $message = 'your message'
	**/
	public openWithAppSms(phone_number: string, message : string){
		let phoneNumber = phone_number || "08123456789";
		let textMessage = encodeURI(message) || "";
		let urlSchema;
		if (this.platform.is("ios")){
			urlSchema = "sms:" + phoneNumber + ";?&body=" + textMessage;
		}else{
			urlSchema = "sms:" + phoneNumber + "?body=" + textMessage;
		}
		this.inAppBrowser.create(urlSchema,"_system");
		this.menu.close();
	}

	/**
	* Test:openWithAppGeo($loc)
	* @param string $loc = '-0.0486027,99.888909'
	**/

	public openWithAppGeo(loc: string, query: string){
		let MyLoc = loc || "-0.0486027,99.888909";
		let MyQuery = query || "";
		let urlSchema;
		if (this.platform.is("ios")){
			urlSchema = "maps://?q=" + MyLoc; 
		}else{
			urlSchema = "geo:" + MyLoc + "?q=" + MyQuery ;
		}
		this.inAppBrowser.create(urlSchema,"_system");
		this.menu.close();
	}
	/**
	* Test:openWithAppPlaystore($app_id)
	* @param string $app_id = 'com.imabuilder'
	**/

	public openWithAppPlaystore(app_id: string){
		let myAppID = app_id || "com.imabuilder.test";
		let urlSchema = "market://details?id=" + myAppID;
		this.inAppBrowser.create(urlSchema,"_system");
		this.menu.close();
	}
	/**
	* Test:openWithSystemBrowser($url)
	* @param string $url = 'http://ihsana.com/'
	**/

	public openWithSystemBrowser(url: string){
		this.inAppBrowser.create(url,"_system");
		this.menu.close();
	}

	/**
	* Test:openWithAppBrowser($url)
	* @param string $url = 'http://ihsana.com/'
	**/

	public openWithAppBrowser(url: string){
		this.inAppBrowser.create(url,"_blank",this.appBrowserOption);
		this.menu.close();
	}

	/**
	* Test:openWithWebview($url)
	* @param string $url = 'http://ihsana.com/'
	**/

	public openWithWebview(url: string){
		this.inAppBrowser.create(url,"_self",this.appWebviewOption);
		this.menu.close();
	}  
}
