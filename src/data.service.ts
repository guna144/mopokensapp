import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(private _http : Http) { }

  loadData(){
    console.log("test");
    return this._http.get('src/data.json')
    .map(res => res.json);
  }


}
