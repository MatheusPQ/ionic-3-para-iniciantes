import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable() //Vai ser feito uma injeção de dependência
//Isto é, será chamada por outra página. Será usada dentro de outra classe
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=5251937abc30d8eb957e68ffc472c8d0");
  }

}
