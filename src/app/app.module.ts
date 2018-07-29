import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Sub1Module } from './sub1_module/sub1.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Sub1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
