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

 items:any[];

  constructor(

    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    private mvoS: ModalVoosOrigemService

  ) {
    console.log('Hello ModalVoosDestino Component');
    if(!this.items)
      this.mvoS.getAirportsWeb().subscribe((res) => {
        this.items = res.json();
      });

  }

initializeItems() {
      // this.items = [
      //   {'label':'Amsterdam','value':'AMS'},
      //   {'label':'Guarulhos','value':'GRU'}
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
