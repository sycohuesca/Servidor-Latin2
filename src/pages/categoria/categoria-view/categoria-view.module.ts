import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriaViewPage } from './categoria-view';

@NgModule({
  declarations: [
    CategoriaViewPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriaViewPage),
  ],
})
export class CategoriaViewPageModule {}
