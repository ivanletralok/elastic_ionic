import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import elastic from './elastic.js';
import { FrutasPage } from './../frutas/frutas';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title; content;
  id;
  fruta; descripcion;
  constructor(public navCtrl: NavController) {
    //console.log(elastic);
    
  }

  agregar() {
    const self = this;
    elastic.addDocument({
      "frutas": self.fruta,
      "descripcion": self.descripcion
    });

    self.fruta = "";
    self.descripcion = "";
    
  }

  buscar() {
    elastic.search(this.title).then(function (results) {
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

  mostrar(){
    this.navCtrl.push(FrutasPage);
  }




  // requestBody = new esb.RequestBodySearch().query(
  //   new esb.MatchQuery('message', 'Prueba')
  // );


}
