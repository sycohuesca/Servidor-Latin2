import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the CategoriaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {
  items: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFireDatabase) {
  }

  ionViewDidLoad() {

    this.items = this.af.list('/categorias', {
      query: {
        orderByChild: 'nombre'
      }
    });
  }
  view(item: any) {
    this.navCtrl.push('CategoriaViewPage', { categoria: item });
  }
  create() {
    this.navCtrl.push('CategoriaFormPage');
  }
  delete(item: any) {
    this.items.remove(item).then(() => {
      alert('Categoria Borrada');
    })
  }
  update(item: any) {
    this.navCtrl.push('CategoriaFormPage', { item: item });
  }



}
