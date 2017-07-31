import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoriaViewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoria-view',
  templateUrl: 'categoria-view.html',
})
export class CategoriaViewPage {
  categoria: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categoria = this.navParams.get('categoria');
  }

  ionViewDidLoad() {

  }

}
