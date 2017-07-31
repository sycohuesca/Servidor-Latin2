import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriaPage } from './categoria';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CategoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriaPage),
    PipesModule
  ],
})
export class CategoriaPageModule { }
