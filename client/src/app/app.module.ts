import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PlaygroundComponent} from "./playground/playground.component";
import {ButtonComponent} from "./elements/button/button.component";
import {InputComponent} from "./elements/input/input.component";

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
