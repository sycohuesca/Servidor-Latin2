import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the VideoFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-form',
  templateUrl: 'video-form.html',
})
export class VideoFormPage {
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
        url: this.item.url
      });
    }
  }
  save() {

    if (this.item) {
      this.af.object('/videos/' + this.item.$key).update(this.myForm.value).then(() => {
        alert('Video actualizado');
      })
    }
    else {
      this.af.list('/videos').push(this.myForm.value).then(() => {
        alert('Video nuevo  guardado.');

      })
    }
    this.navCtrl.pop();

  }


  private createMyForm() {
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      url: ['', Validators.required]
    });
  }


}
