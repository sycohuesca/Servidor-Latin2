import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the RadioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html',
})
export class RadioPage {
  radios: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFireDatabase) {
    this.radios = this.af.list('/radios');
  }

  ionViewDidLoad() {

  }
  view(item: any) {

    this.navCtrl.push('RadioViewPage', { item: item });
  }
  create() {
    this.navCtrl.push('RadioFormPage');
  }
  delete(item: any) {
    this.radios.remove(item).then(() => {
      alert('Radio Borrada');
    })
  }
  update(item: any) {
    this.navCtrl.push('RadioFormPage', { item: item });
  }
}
