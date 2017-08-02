import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoFormPage } from './video-form';

@NgModule({
  declarations: [
    VideoFormPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoFormPage),
  ],
})
export class VideoFormPageModule {}
