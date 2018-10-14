import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import elastic from './elastic.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title;content;
  id;
  constructor(public navCtrl: NavController) {
    console.log(elastic);
    //console.log(this.requestBody.toJSON());
  }

  buscar(){
    elastic.search(this.title).then(function (results) {
      console.log(results.hits);
    });
    this.title = "";
  }

  eliminar(){
    elastic.deleteDocument(this.id).then( function( result ){
      console.log(result);
    });
    this.id = "";
  }




  // requestBody = new esb.RequestBodySearch().query(
  //   new esb.MatchQuery('message', 'Prueba')
  // );


}
