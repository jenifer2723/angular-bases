import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListComponent } from './heroes/list/list.component';
import { counterModule } from './counter/counter.module';
import {  heroesModule } from './heroes/hero.module';





@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    counterModule,
    heroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
