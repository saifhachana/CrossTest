import { Component, Injectable, OnInit } from '@angular/core';
import { TserviceService } from '../tservice.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  Test;
  constructor(
    private _testservice: TserviceService
  ) {}

  ngOnInit(): void {
    this.getTask();
  
    
  }

  
getTask(){
  this._testservice.getTest().subscribe(respone=>{this.Test = respone});
}


}
