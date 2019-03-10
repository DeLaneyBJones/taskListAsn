import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';


export const firebaseconfig = {
  apiKey: "AIzaSyAbOiepcsrDQFqdAEDo1iEvSSFaUseGNII",
  authDomain: "ionic2do-1eb22.firebaseapp.com",
  databaseURL: "https://ionic2do-1eb22.firebaseio.com",
  projectId: "ionic2do-1eb22",
  storageBucket: "ionic2do-1eb22.appspot.com",
  messagingSenderId: "271997666140"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp( firebaseconfig ),
    AngularFireDatabaseModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
