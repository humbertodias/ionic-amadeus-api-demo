import { Component } from '@angular/core';

/*
  Generated class for the HoteisForm component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'hoteis-form',
  templateUrl: 'hoteis-form.html'
})
export class HoteisFormComponent {

  text: string;

  constructor() {
    console.log('Hello HoteisForm Component');
    this.text = 'Hello World';
  }

}
