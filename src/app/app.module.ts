import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewIntentsComponent } from './view-intents/view-intents.component';
import { EditIntentsComponent } from './edit-intents/edit-intents.component'

@NgModule({
  declarations: [
    AppComponent, ChatbotComponent, ChatbotComponent, ViewIntentsComponent, EditIntentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
