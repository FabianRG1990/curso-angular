import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContadorModule } from './contador/contador.module';

import { HeroesModulo } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeroesModulo, ContadorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
