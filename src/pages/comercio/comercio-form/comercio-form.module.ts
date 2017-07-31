import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComercioFormPage } from './comercio-form';

@NgModule({
  declarations: [
    ComercioFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ComercioFormPage),
  ],
})
export class ComercioFormPageModule {}
