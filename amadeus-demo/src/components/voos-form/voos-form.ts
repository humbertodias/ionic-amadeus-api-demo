import { Component } from '@angular/core';


import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


import { ModalVoosOrigemComponent } from '../modal-voos-origem/modal-voos-origem';
import { ModalVoosDestinoComponent } from '../modal-voos-destino/modal-voos-destino';

/*
  Generated class for the VoosForm component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'voos-form',
  templateUrl: 'voos-form.html'
})
export class VoosFormComponent {

  text: string;
  // default tab
  voo='ida-volta';

  origem={'name':'Origem', 'iata':''};
  destino={'name':'Destino', 'iata':''};


  dataPartida;
  dataVolta;


  constructor(public modalCtrl: ModalController) {
    console.log('Hello VoosForm Component');
    this.text = 'Hello World';
  }

  escolheOrigem(data){
    let modal = this.modalCtrl.create(ModalVoosOrigemComponent, data);
    modal.onDidDismiss(selectedItem => {
     console.log('onDidDismiss', selectedItem);
     if(selectedItem)
       this.origem = selectedItem;
    });
    modal.present();
  }


  escolheDestino(data){
    let modal = this.modalCtrl.create(ModalVoosDestinoComponent, data);
    modal.onDidDismiss(selectedItem => {
     console.log('onDidDismiss', selectedItem);
     if(selectedItem)
       this.destino = selectedItem;
    });
    modal.present();
  }

}
