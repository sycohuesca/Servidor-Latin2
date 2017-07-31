import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComercioPage } from './comercio';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ComercioPage,
  ],
  imports: [
    IonicPageModule.forChild(ComercioPage),
    PipesModule
  ],
})
export class ComercioPageModule { }
