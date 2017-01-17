import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { VoosFormComponent } from '../components/voos-form/voos-form';
import { CarrosFormComponent } from '../components/carros-form/carros-form';
import { HoteisFormComponent } from '../components/hoteis-form/hoteis-form';

import { ModalVoosOrigemComponent } from '../components/modal-voos-origem/modal-voos-origem';
import { ModalVoosDestinoComponent } from '../components/modal-voos-destino/modal-voos-destino';

import { ModalVoosOrigemService } from '../components/modal-voos-origem/modal-voos-origem-service';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    VoosFormComponent,
    CarrosFormComponent,
    HoteisFormComponent,

    ModalVoosOrigemComponent,
    ModalVoosDestinoComponent  
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,

    VoosFormComponent,
    CarrosFormComponent,
    HoteisFormComponent,

    ModalVoosOrigemComponent,
    ModalVoosDestinoComponent  

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ModalVoosOrigemService]
})
export class AppModule {}
