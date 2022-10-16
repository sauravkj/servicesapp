import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-simplyiot',
  templateUrl: './simplyiot.component.html',
  styleUrls: ['./simplyiot.component.css']
})
export class SimplyiotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Simplify IoT Component";
  btn(){
    const service = new myservice()
    service.Obtn(this.title);
  }

}
