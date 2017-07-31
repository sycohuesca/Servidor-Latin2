import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
/**
 * Generated class for the ComercioFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comercio-form',
  templateUrl: 'comercio-form.html',
})
export class ComercioFormPage {
  myForm: FormGroup;
  idCategoria: string;
  galeria: any = [];
  item: any;
  estado: string = 'Esperando...';
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private af: AngularFireDatabase) {
    this.myForm = this.createMyForm();
    this.idCategoria = this.navParams.get('idCategoria');
    this.item = this.navParams.get('item');
  }
  ionViewDidLoad() {
    if (this.item) {
      this.galeria = this.item.galeria;
      this.myForm.setValue({
        nombre: this.item.nombre,
        descripcion: this.item.descripcion,
        direccion: this.item.direccion,
        telefono: this.item.telefono,
        horario: this.item.horario,
        longitud: this.item.longitud,
        latitud: this.item.latitud,
        mapa: this.item.mapa,
      });
    }
  }

  createMyForm() {
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      horario: ['', Validators.required],
      longitud: ['', Validators.required],
      latitud: ['', Validators.required],
      mapa: ['', Validators.required],
    });
  }

  subir(e: any) {
    this.estado = 'Cargando...';
    let eventObj: MSInputMethodContext = <MSInputMethodContext>e;
    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    let files: FileList = target.files;
    let file = files[0];
    let storageRef = firebase.storage().ref();
    storageRef.child('uploads/' + file.name).put(file).then(salida => {
      this.galeria.push(salida.downloadURL);
      this.estado = salida.state;
    })
  }

  borrarFotos() {
    for (let img of this.galeria) {
      console.log(img);
      firebase.storage().refFromURL(img).delete();
    }
    this.galeria = [];

    alert('borrado todas las fotos');
  }

  save() {

    if (this.item) {
      this.af.object('/categorias/' + this.idCategoria + '/comercios/' + this.item.$key).update(this.myForm.value).then(() => {
        this.af.object('/categorias/' + this.idCategoria + '/comercios/' + this.item.$key).update({ galeria: this.galeria });
        alert('Comercio actualizada');
      })

    }
    else {
      console.log('/categorias/' + this.idCategoria + '/comercios');
      this.af.list('/categorias/' + this.idCategoria + '/comercios').push(this.myForm.value).then((datos) => {
        this.af.object('/categorias/' + this.idCategoria + '/comercios/' + datos.key).update({ galeria: this.galeria });
        alert('Cormercio nuevo guardado.');
      })
    }

    this.navCtrl.pop();

  }

}
