import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Start } from './components/start/start';
import { Banan } from './components/banan/banan';
import { Ananas } from './components/ananas/ananas';
import { Truskawka } from './components/truskawka/truskawka';

@NgModule({
  declarations: [
    App,
    Start,
    Banan,
    Ananas,
    Truskawka
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
