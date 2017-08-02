import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the VideoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  videos: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFireDatabase) {
    this.videos = this.af.list('/videos');
  }

  ionViewDidLoad() {

  }
  view(item: any) {

    this.navCtrl.push('VideoViewPage', { item: item });
  }
  create() {
    this.navCtrl.push('VideoFormPage');
  }
  delete(item: any) {
    this.videos.remove(item).then(() => {
      alert('Video Borrada');
    })
  }
  update(item: any) {
    this.navCtrl.push('VideoFormPage', { item: item });
  }
}
