import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { CategoriaPageModule } from '../pages/categoria/categoria.module';
import { CategoriaFormPageModule } from '../pages/categoria/categoria-form/categoria-form.module';
import { CategoriaViewPageModule } from '../pages/categoria/categoria-view/categoria-view.module';
import { ComercioPageModule } from '../pages/comercio/comercio.module';
import { ComercioFormPageModule } from '../pages/comercio/comercio-form/comercio-form.module';
import { ComercioViewPageModule } from '../pages/comercio/comercio-view/comercio-view.module'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig = {
  apiKey: "AIzaSyAU9BuFhJcSZct5zmVkGf_zTLJBmx0iQ6E",
  authDomain: "latin2-abdd8.firebaseapp.com",
  databaseURL: "https://latin2-abdd8.firebaseio.com",
  projectId: "latin2-abdd8",
  storageBucket: "latin2-abdd8.appspot.com",
  messagingSenderId: "587750896606"
};


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HomePageModule,
    CategoriaPageModule,
    CategoriaFormPageModule,
    CategoriaViewPageModule,
    ComercioPageModule,
    ComercioViewPageModule,
    ComercioFormPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
