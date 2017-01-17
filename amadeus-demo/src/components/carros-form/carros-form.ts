import { Component } from '@angular/core';

/*
  Generated class for the CarrosForm component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'carros-form',
  templateUrl: 'carros-form.html'
})
export class CarrosFormComponent {

  text: string;

  constructor() {
    console.log('Hello CarrosForm Component');
    this.text = 'Hello World';
  }

}
