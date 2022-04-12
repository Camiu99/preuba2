import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-intents',
  templateUrl: './view-intents.component.html',
  styleUrls: ['./view-intents.component.css']
})
export class ViewIntentsComponent implements OnInit {

  titulos = ['Fecha','TAG', 'Patterns', 'Responses', 'Editar'];
  filas : any[] = [];
  // tag:any;
  // pattern:any;
  // responses:any;
  time:any;
  

  createColumna(tag:string, pattern:string, responses:string): void {
    const nd = new Date;
    this.time = nd.toLocaleDateString();
    console.log(tag);
    console.log("hola");
    this.filas.push({time: this.time, tag, pattern, responses});
    // this.filas.push({this.cols});
  }

  constructor() {
    this.createColumna("as","as","asd");
    this.createColumna("asa1","as1","asd1");
   }

  ngOnInit(): void {
  }

}
