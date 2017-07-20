import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

/**
 * Generated class for the CarritoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html',
})
export class CarritoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private bluetoothSerial: BluetoothSerial) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarritoPage');
  }

  onPress(direction){
  	this.bluetoothSerial.write(direction);
  }

  onTouchEnd(){
  	this.bluetoothSerial.write('e');
  }

}
