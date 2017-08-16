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
    let url = 'https://api.ionic.io/push/notifications';
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxZDc1MzQ3NS0yMGM3LTRmYzYtYjc0Yy0zMTI2OGNmOGIwZGMifQ.lPvgjtc4J_8v69GNUJIonOKBj4TUah4ewg-bw0Jvo6Q' });
    let options = new RequestOptions({ headers: headers });
    let cuerpo = {
      profile: "pruebas",
      send_to_all: "true",
      notification: {
        title: this.myForm.value.titulo,
        message: this.myForm.value.mensaje
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
