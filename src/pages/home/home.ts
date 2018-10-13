import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as elasticsearch from 'elasticsearch';
import esb from 'elastic-builder';
import bodybuilder from 'bodybuilder';

import elastic from './elastic.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    console.log(elastic);
    //console.log(this.requestBody.toJSON());
  }

  agregarFrutas() {
    elastic.search("*").then(function (results) {
      console.log(results);
    });
  }


  // requestBody = new esb.RequestBodySearch().query(
  //   new esb.MatchQuery('message', 'Prueba')
  // );


}
