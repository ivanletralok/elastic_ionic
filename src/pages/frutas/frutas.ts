import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import elastic from '../home/elastic.js';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the FrutasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frutas',
  templateUrl: 'frutas.html',
})
export class FrutasPage {
  buscarF;
  t = 0;
  result: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    this.mostrar();
  }

  mostrar() {
    let self = this;
    elastic.search("*").then(function (results) {
      self.t = results.hits.hits.length;
      self.result = results.hits.hits;
      // console.log(self.result)
      // for (let r of self.result)
      //   console.log(r);
    });
  }

  buscar() {
    let self = this;
    let cont = 0;
    elastic.search(self.buscarF).then(function (results) {
      let it = results.hits.hits.length;
      for (let i = 0; i < it; i++) {
        cont++;
      }
      if (cont == 0 ) {
        const toast = self.toastCtrl.create({
          message: 'No Encontrado',
          duration: 3000
        });
        toast.present();
      }else{
        const toast = self.toastCtrl.create({
          message: 'Encontrada!,  \n'
          + ' La Fruta Buscada es : ' + self.buscarF,
          duration: 3000
        });
        toast.present();
        self.buscarF = "";
      }

    });

  }

}