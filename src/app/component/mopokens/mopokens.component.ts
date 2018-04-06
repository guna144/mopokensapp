import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { MopokensType } from '../../_model/mopokensType';

@Component({
  selector: 'mopokens-component',
  templateUrl: './mopokens.component.html',
  styleUrls: ['./mopokens.component.css']
})
export class MopokensComponent implements OnInit {

  @Input() value   : string;
  @Input() name    : string;
  @Input() id      : string;
  @Input() txtName : string;
  @Input() levelId : string;


  datas         : any;
  mopokens      : any[];
  mopokensParam : any[];
  private mopokenType :  MopokensType
  constructor(private dataService : DataService) { 
    this.mopokens      = [];
    this.mopokensParam = [];
  }

  ngOnInit() {
     this.loadDatas();
  }


  loadDatas(){
    this.dataService.loadData().subscribe(datas => {
      this.datas = datas;
    });
  }


  generateMopokens(input : string){
    try {
      this.mopokens  = input.split(";");
      this.mopokens.forEach((mopo) => {
        this.mopokensParam = mopo.split("#");
        MopokensType[this.mopokensParam[0]]
      })
    } catch (error) {
      
    }
  }
}
