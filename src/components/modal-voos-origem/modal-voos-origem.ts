import { Component, OnInit } from '@angular/core';


import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ModalVoosOrigemService } from './modal-voos-origem-service';
import removeAccents from 'remove-accents';
/*
  Generated class for the ModalVoosOrigem component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'modal-voos-origem',
  templateUrl: 'modal-voos-origem.html'
})
export class ModalVoosOrigemComponent {

  searchQuery: string = '';

  items: any[];
  itemsAll: any[];
  results: any[] = [];

  constructor(

    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    private mvoS: ModalVoosOrigemService
  ) {
    console.log('Hello ModalVoosOrigem Component');

    this.itemsAll = this.mvoS.getAirportsWeb();
    this.items = this.itemsAll;
    // this.mvoS.getAirportsWeb().subscribe((res) => {
    //   this.items = res.json();
    // });
  }

  initializeItems() {
    this.items = this.itemsAll;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    console.log("getItems");
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '' && val.length >= 3) {
      this.items = this.items.filter((item) => {
        return ((item.name || '').toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  getResults(ev: any) {
    let val = removeAccents(ev.target.value);
    // console.log(removeAccents);
    // val = removeAccents(val);
    console.log(val);
    if (val && val.trim() != "" && val.length >= 2) {
      this.results = this.itemsAll.filter((item) => {
        let tmpName = item.name || '';
        // tmpName = removeAccents(tmpName);
        return ((tmpName || '').toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.results = [];
    }

  }
  dismiss(args) {
    this.viewCtrl.dismiss(args);
  }

}
