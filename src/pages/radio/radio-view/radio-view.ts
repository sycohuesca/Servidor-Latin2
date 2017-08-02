import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the radioViewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-radio-view',
  templateUrl: 'radio-view.html',
})
export class RadioViewPage {
  radio: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.radio = navParams.get('item');
  }

  ionViewDidLoad() {

  }

}
