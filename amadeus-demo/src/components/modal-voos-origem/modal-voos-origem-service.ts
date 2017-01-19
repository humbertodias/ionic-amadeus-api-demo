import { Http } from '@angular/http';
import { Injectable } from "@angular/core";


@Injectable()
export class ModalVoosOrigemService {
    prom;
    tmp;
    constructor(private http: Http) {
        // console.log("getAirportsWeb Constructor");
        // this.prom = this.http.get('assets/airports.json');
        // var x;
        // this.http.get('assets/airports.json').subscribe((res) => {
        //     x = res.json()
        // });
        // this.tmp = x;
    }
    getAirportsWeb() {

        // return this.http.get('assets/airports.json');
        // console.log(this.getAirports());
        // return this.prom;
        return (<any>window).airports;
        // return (<any>window).airplanes || {};
        // return this.http.get('https://raw.githubusercontent.com/jbrooksuk/JSON-Airports/master/airports.json');
    }
    getAirports() {
        return (<any>window).airports;
    }
}