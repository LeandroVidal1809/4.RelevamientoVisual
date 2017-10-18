import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule,AngularFireAuth, } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Camera,CameraOptions} from '@ionic-native/camera';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-camara',
  templateUrl: 'camara.html',
})

export class CamaraPage {
list:FirebaseListObservable<any>;
image:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private camara:Camera,db:AngularFireDatabase) {
    this.list=db.list('/Relevamiento');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CamaraPage');
  }

  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camara.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camara.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
      console.error( error );
    });
  }
}
