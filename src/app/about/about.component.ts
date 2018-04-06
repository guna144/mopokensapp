import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  mopoForm : any = {};
  constructor() { 

  }

  ngOnInit() {
   
  }

  selectedMopokens(event){
    console.log(`mopoId : ${event.id} :: ${event.value}`);
  }

}
