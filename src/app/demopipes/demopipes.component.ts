import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipes',
  templateUrl: './demopipes.component.html',
  styleUrls: ['./demopipes.component.css']
})
export class DemopipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
title="banglore";
// today="1-2-2022";
today=Date();
user={
  id:100,
  name:"Visvanath",
  DOB:"10-10-2000",
  salary:26000
}
}
