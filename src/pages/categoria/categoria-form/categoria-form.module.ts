import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriaFormPage } from './categoria-form';

@NgModule({
  declarations: [
    CategoriaFormPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriaFormPage),
  ],
})
export class CategoriaFormPageModule {}
