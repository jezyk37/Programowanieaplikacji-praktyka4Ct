import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Start } from './components/start/start';
import { Aniacjapierwsza } from './components/aniacjapierwsza/aniacjapierwsza';
import { Aniacjadruga } from './components/aniacjadruga/aniacjadruga';
import { Aniacjatrzecia } from './components/aniacjatrzecia/aniacjatrzecia';

@NgModule({
  declarations: [
    App,
    Start,
    Aniacjapierwsza,
    Aniacjadruga,
    Aniacjatrzecia
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
