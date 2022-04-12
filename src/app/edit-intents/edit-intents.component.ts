import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-intents',
  templateUrl: './edit-intents.component.html',
  styleUrls: ['./edit-intents.component.css']
})
export class EditIntentsComponent implements OnInit {

  constructor() { }

  patterns: any[] = [];
  responses: any[] = [];

  ngOnInit(): void {
  }

  createPattern(): void {
    this.patterns.push({id: this.patterns.length});
  }
  
  createResponse(): void {
    this.responses.push({id: this.responses.length});
  }

  deletePattern(numberId:any): void {
    this.patterns=this.patterns.filter((item)=>item.id!==numberId);
  }

  deleteResponse(numberId:any): void {
    this.responses=this.responses.filter((item)=>item.id!==numberId);
  }

}
