import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ComercioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comercio',
  templateUrl: 'comercio.html',
})
export class ComercioPage {
  categorias: any;
  comercios: any;
  idCategoria: string;
  options: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFireDatabase) {

  }


  ionViewDidLoad() {
    this.af.list('/categorias', {
      query: {
        orderByChild: 'nombre',
      }
    }).subscribe(data => {
      this.categorias = data;
    })
  }
  view(item: any) {

    this.navCtrl.push('ComercioViewPage', { item: item });
  }
  create() {
    this.navCtrl.push('ComercioFormPage', { idCategoria: this.idCategoria });
  }
  delete(item: any) {
    this.comercios.remove(item).then(() => {
      alert('Comercio Borrada');
    })
  }
  update(item: any) {
    this.navCtrl.push('ComercioFormPage', { idCategoria: this.idCategoria, item: item });
  }
  onChange(key) {
    this.comercios = this.af.list('/categorias/' + key + '/comercios', {
      query: {
        orderByChild: 'nombre',
      }
    });
    this.idCategoria = key;
  }

}
