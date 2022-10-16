import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-innovative',
  templateUrl: './innovative.component.html',
  styleUrls: ['./innovative.component.css']
})
export class InnovativeComponent implements OnInit {

  constructor() { }

  ngOnInit():  void {
    
  }
  title="Innovative Component";
  btn(){
    const service = new myservice()
    service.Obtn(this.title);
  }
}
