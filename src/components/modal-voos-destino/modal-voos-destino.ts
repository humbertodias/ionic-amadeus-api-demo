import { Component } from '@angular/core';

import { ModalVoosOrigemService } from '../modal-voos-origem/modal-voos-origem-service';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the ModalVoosDestino component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'modal-voos-destino',
  templateUrl: 'modal-voos-destino.html'
})
export class ModalVoosDestinoComponent {

  searchQuery: string = '';

  items: any[];
  itemsAll: any[];
  results: any[] = [];

  constructor(

    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    // console.log('Hello ModalVoosOrigem Component');

    this.itemsAll = (<any>window).airports;
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
    // console.log("getItems");
    // this.initializeItems();

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
    let val = ev.target.value;
    if (val && val.trim() != "" && val.length >= 2) {
      this.results = this.itemsAll.filter((item) => {
        return ((item.name || '').toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.results = [];
    }

  }
  dismiss(args) {
    this.viewCtrl.dismiss(args);
  }
}
