import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import elastic from '../home/elastic.js';
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
  t = 0;
  result: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
     this.mostrar();
  }

  mostrar() {
    let self = this;
    elastic.search("*").then(function (results) {
      self.t = results.hits.hits.length;
      self.result = results.hits.hits;
      console.log(self.result)
      // for (let r of self.result)
      //   console.log(r);
    });
  }


}
