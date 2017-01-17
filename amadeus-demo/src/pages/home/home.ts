import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


import { VoosFormComponent } from '../../components/voos-form/voos-form';
import { CarrosFormComponent } from '../../components/carros-form/carros-form';
import { HoteisFormComponent } from '../../components/hoteis-form/hoteis-form';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
items = [ {'label': 'Voos', 'route': VoosFormComponent, 'icon':'plane', 'desc': 'Encontre os voos mais baratos'}
        , {'label': 'Hotéis', 'route': HoteisFormComponent, 'icon':'home', 'desc': 'Encontre a melhor acomodação'}
        , {'label': 'Carros', 'route':CarrosFormComponent, icon:'car', 'desc': 'Alugue um carro para sua viagem' }];
  constructor(public navCtrl: NavController) {

  }
  goToOutro(item) {
    this.navCtrl.push(item.route);
  }

}
