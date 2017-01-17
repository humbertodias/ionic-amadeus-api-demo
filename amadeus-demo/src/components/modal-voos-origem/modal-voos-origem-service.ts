import { Http } from '@angular/http';
import { Injectable } from "@angular/core";


@Injectable()
export class ModalVoosOrigemService {
    constructor(private http: Http) {

    }
    getAirportsWeb() {
        return this.http.get('assets/airports.json');
        // return this.http.get('https://raw.githubusercontent.com/jbrooksuk/JSON-Airports/master/airports.json');
    }
    getAirports() {
        return [
            {
                "iata": "UTK",
                "lon": "169.86667",
                "iso": "MH",
                "status": 1,
                "name": "Utirik Airport",
                "continent": "OC",
                "type": "airport",
                "lat": "11.233333",
                "size": "small"
            },
            {
                "iata": "FIV",
                "iso": "US",
                "status": 1,
                "name": "Five Finger CG Heliport",
                "continent": "NA",
                "type": "heliport",
                "size": null
            }];
    }
}