import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-agile',
  templateUrl: './agile.component.html',
  styleUrls: ['./agile.component.css']
})
export class AgileComponent implements OnInit {

  constructor() { }
  title="Agile Component";
  btn(){
    // 
    const service = new myservice()
    service.Obtn(this.title);
  }
  ngOnInit(): void {
  }

}
