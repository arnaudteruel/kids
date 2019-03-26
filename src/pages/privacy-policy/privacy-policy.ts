/** angular **/
import {Component,OnInit} from "@angular/core";

/** ionic-angular **/
import {NavController,Platform} from "ionic-angular";

/** ionic-native **/
import {InAppBrowser,InAppBrowserOptions} from "@ionic-native/in-app-browser/ngx";
import {Dialogs} from "@ionic-native/dialogs/ngx";

/** page **/
import {AboutUsPage} from "../about-us/about-us";
import {FaqsPage} from "../faqs/faqs";
import {HomePage} from "../home/home";



@Component({
	selector: "page-privacy-policy",
	templateUrl: "privacy-policy.html"
})

export class PrivacyPolicyPage implements OnInit{



	/**
	* Options for the Cordova InAppBrowser Plugin
	* @reference: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/
	**/

	// OpenWithAppBrowser Option
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

	// OpenWithWebview Option
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

	/**
	* PrivacyPolicyPage:constructor()
	**/
	constructor(
		public inAppBrowser: InAppBrowser,
		public dialogs: Dialogs,
		public navCtrl: NavController,
		public platform: Platform
	){
		// constructor
	}


	/**
	* PrivacyPolicyPage:goToAboutUsPage($param)
	* @param object $param = {var1:val1,var2:val2}
	**/

	public goToAboutUsPage(param: object | null)
	{
		if(param === null){
			this.navCtrl.push(AboutUsPage);
		}else{
			this.navCtrl.push(AboutUsPage,param);
		}
	}

	/**
	* PrivacyPolicyPage:goToFaqsPage($param)
	* @param object $param = {var1:val1,var2:val2}
	**/

	public goToFaqsPage(param: object | null)
	{
		if(param === null){
			this.navCtrl.push(FaqsPage);
		}else{
			this.navCtrl.push(FaqsPage,param);
		}
	}

	/**
	* PrivacyPolicyPage:goToHomePage($param)
	* @param object $param = {var1:val1,var2:val2}
	**/

	public goToHomePage(param: object | null)
	{
		if(param === null){
			this.navCtrl.push(HomePage);
		}else{
			this.navCtrl.push(HomePage,param);
		}
	}


	/**
	* PrivacyPolicy:goToPage($page,$param)
	* @param string $page = 'about_us|faqs|home|privacy_policy'
	* @param object $param = {var1:val1,var2:val2}
	**/

	public goToPage(page: string, param: object | null)
	{
		switch(page){
			case "about_us": 
				if(param === null){
					this.navCtrl.push(AboutUsPage);
				}else{
					this.navCtrl.push(AboutUsPage,param);
				}
				break;
			case "faqs": 
				if(param === null){
					this.navCtrl.push(FaqsPage);
				}else{
					this.navCtrl.push(FaqsPage,param);
				}
				break;
			case "home": 
				if(param === null){
					this.navCtrl.push(HomePage);
				}else{
					this.navCtrl.push(HomePage,param);
				}
				break;
			case "privacy_policy": 
				if(param === null){
					this.navCtrl.push(PrivacyPolicyPage);
				}else{
					this.navCtrl.push(PrivacyPolicyPage,param);
				}
				break;
		}
	}

	/**
	* PrivacyPolicyPage:openWithSystemBrowser($url)
	* @param string $url = 'http://ihsana.com/'
	**/

	public openWithSystemBrowser(url : string)
	{
		this.inAppBrowser.create(url,"_system");
	}

	/**
	* PrivacyPolicyPage:openWithAppBrowser($url)
	* @param string $url = 'http://ihsana.com/'
	**/

	public openWithAppBrowser(url : string)
	{
		this.inAppBrowser.create(url,"_blank",this.appBrowserOption);
	}

	/**
	* PrivacyPolicyPage:openWithWebview($url)
	* @param string $url = 'http://ihsana.com/'
	**/

	public openWithWebview(url : string)
	{
		this.inAppBrowser.create(url,"_self",this.appWebviewOption);
	}  

	/**
	* PrivacyPolicy:openWithAppEmail($email,$subject,$message)
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
	}

	/**
	* PrivacyPolicy:openWithAppCall($phone_number)
	* @param string $phone_number = '082233333734'
	**/

	public openWithAppCall(phone_number: string){
		let phoneNumber = phone_number || "08123456789";
		let urlSchema = "tel:" + phoneNumber ;
		this.inAppBrowser.create(urlSchema,"_system");
	}

	/**
	* PrivacyPolicy:openWithAppSms($phone_number)
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
	}

	/**
	* PrivacyPolicy:openWithAppGeo($loc)
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
	}

	/**
	* PrivacyPolicy:openWithAppPlaystore($app_id)
	* @param string $app_id = 'com.imabuilder'
	**/

	public openWithAppPlaystore(app_id: string){
		let myAppID = app_id || "com.imabuilder.test";
		let urlSchema = "market://details?id=" + myAppID;
		this.inAppBrowser.create(urlSchema,"_system");
	}


	// TODO: CODE BY USER


	/**
	* PrivacyPolicyPage:ngOnInit()
	* @param string $url = 'http://ihsana.com/'
	**/
	public ngOnInit()
	{
	}  


}