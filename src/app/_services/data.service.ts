import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(private _http : Http) { }

  loadData(){
    return this._http.get('assets/json/mopokens.data.json').map(res => res.json());
  }


}
