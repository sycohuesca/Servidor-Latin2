import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VideoViewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-view',
  templateUrl: 'video-view.html',
})
export class VideoViewPage {
  video: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.video = navParams.get('item');
  }

  ionViewDidLoad() {

  }

}
