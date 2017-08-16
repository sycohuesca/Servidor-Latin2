import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
/**
 * Generated class for the MensajesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mensajes',
  templateUrl: 'mensajes.html',
})
export class MensajesPage {
  myForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private http: Http) {
    this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {

  }
  save() {
    let url = 'https://fcm.googleapis.com/fcm/send';
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'key=AIzaSyC_ZJC9wmRQm0Lpf1y4w8sKBW2q_vVgF64' });
    let options = new RequestOptions({ headers: headers });
    let cuerpo = {
      to: "/topics/publi",
      notification: {
        title: this.myForm.value.titulo,
        body: this.myForm.value.mensaje,
        sound: "default",
        vibrate: "true"
      }
    };

    this.http.post(url, cuerpo, options).subscribe(data => {
      alert('Mensaje enviado.');
      this.myForm.reset();
    })

  }


  private createMyForm() {
    return this.formBuilder.group({
      titulo: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

}
