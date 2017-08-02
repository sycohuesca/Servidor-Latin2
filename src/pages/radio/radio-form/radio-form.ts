import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the radioFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-radio-form',
  templateUrl: 'radio-form.html',
})
export class RadioFormPage {
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
        descripcion: this.item.descripcion,
        frequencia: this.item.frequencia
      });
    }
  }
  save() {

    if (this.item) {
      this.af.object('/radios/' + this.item.$key).update(this.myForm.value).then(() => {
        alert('Radio actualizado');
      })
    }
    else {
      this.af.list('/radios').push(this.myForm.value).then(() => {
        alert('Radio nueva  guardada.');

      })
    }
    this.navCtrl.pop();

  }


  private createMyForm() {
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      frequencia: ['', Validators.required]
    });
  }


}
