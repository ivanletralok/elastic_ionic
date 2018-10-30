import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import elastic from './elastic.js';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title; content;
  id;
  fruta; descripcion;
  constructor(public navCtrl: NavController) {
    console.log(elastic);
    // elastic.addDocument({
    //   "frutas": "Melon",
    //   "descripcion": "El melon es amarillo"
    // });
    //console.log(this.requestBody.toJSON());
  }

  agregar() {
    const self = this;
    elastic.addDocument({
      "frutas": self.fruta,
      "descripcion": self.descripcion
    });
    
  }

  buscar() {
    elastic.search("*").then(function (results) {
      let it = results.hits.hits.length;
      for (let i = 0; i < it; i++) {
        console.log(results.hits.hits[i]._source)
      }
    });
    this.title = "";
  }

  eliminar() {
    elastic.deleteDocument(this.id).then(function (result) {
      console.log(result);
    });
    this.id = "";
  }




  // requestBody = new esb.RequestBodySearch().query(
  //   new esb.MatchQuery('message', 'Prueba')
  // );


}
