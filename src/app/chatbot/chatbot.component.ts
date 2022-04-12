import {  Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html'
})
export class ChatbotComponent implements OnInit {
  constructor() {}

  user: string = "";
  user1: string = "";
  bot: string = "BIENVENIDO!";
  divs: any[] = [];
  time:any;

  ngOnInit(): void {
  }

  Enviarmsn(){
    console.log("entro s la funcion con user: "+this.user);    
    this.user1 = this.user;
    this.user = "";
    if (this.user1 == ""){
      console.log("no hay chance compa");
    }else{
      this.createDiv();
    }
    
  }

  createDiv(): void {
    const nd = new Date;
    if(nd.getMinutes()>10){
      this.time = nd.getHours() + ":" + nd.getMinutes();
    }else{
      this.time = nd.getHours() + ":0" + nd.getMinutes();
    }
    this.divs.push({id: this.divs.length, message: this.user1, messageBot:this.bot, tiempo:this.time});
  }
  

}
