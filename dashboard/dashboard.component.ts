import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title:string;
  tagLine:String;

  constructor() {
    this.title="Product Management Application";
    this.tagLine="A Simple SPA";
   }

  ngOnInit(): void {
  }

}
