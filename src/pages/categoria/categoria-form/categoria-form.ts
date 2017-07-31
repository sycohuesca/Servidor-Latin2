import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the CategoriaFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoria-form',
  templateUrl: 'categoria-form.html',
})
export class CategoriaFormPage {
  myForm: FormGroup;
  item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private af: AngularFireDatabase) {
    this.myForm = this.createMyForm();
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    if (this.item) {
      this.myForm.setValue({
        nombre: this.item.nombre,
        icono: this.item.icono
      });
    }
  }

  save() {

    if (this.item) {
      this.af.object('/categorias/' + this.item.$key).update(this.myForm.value).then(() => {
        alert('Categoria actualizada');
      })
    }
    else {
      this.af.list('/categorias').push(this.myForm.value).then(() => {
        alert('Categoria nueva  guardada.');

      })
    }
    this.navCtrl.pop();

  }


  private createMyForm() {
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      icono: ['', Validators.required]
    });
  }

}
