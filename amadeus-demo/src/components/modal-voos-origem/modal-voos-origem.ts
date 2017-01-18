import { Component, OnInit } from '@angular/core';


import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ModalVoosOrigemService } from './modal-voos-origem-service';

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


  constructor(

    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    private mvoS: ModalVoosOrigemService
  ) {
    console.log('Hello ModalVoosOrigem Component');

    if(!this.items)
    this.mvoS.getAirportsWeb().subscribe((res) => {
      this.items = res.json();
    });
  }

  initializeItems() {
    // this.items = [
    //   {'name':'Amsterdam','value':'AMS'},
    //   {'name':'Guarulhos','value':'GRU'}
    // ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return ( (item.name || '').toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  dismiss(args) {
    this.viewCtrl.dismiss(args);
  }

}
