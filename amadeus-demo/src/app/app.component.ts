import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Http } from '@angular/http';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    // rootPage = TabsPage;
    rootPage = HomePage;

    constructor(platform: Platform, private http: Http) {
        platform.ready().then(() => {
            // airplanes = "";
            // this.http.get('assets/airports.json').subscribe((res) => {
            //     (<any>window).airplanes = res.json();
            // });

            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }
}
