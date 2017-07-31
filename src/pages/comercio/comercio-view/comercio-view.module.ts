import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComercioViewPage } from './comercio-view';

@NgModule({
  declarations: [
    ComercioViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ComercioViewPage),
  ],
})
export class ComercioViewPageModule {}
