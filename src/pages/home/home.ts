import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any;
  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      console.log(user);
      if (!user) {
        this.user = null;
        return;
      }
      if (user.email == 'latin2apk@gmail.com') {
        this.user = user.email;
      }
      else {
        alert('No estas autorizado.')
      }
    });
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(() => alert('Te has conectado.'))

  }
  logout() {
    this.afAuth.auth.signOut().then(() => alert('Asta luego.'));

  }


}
