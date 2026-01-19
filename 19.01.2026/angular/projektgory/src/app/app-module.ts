import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Start } from './comoponents/start/start';
import { Tatry } from './comoponents/tatry/tatry';
import { Beskidy } from './comoponents/beskidy/beskidy';
import { Pieniny } from './comoponents/pieniny/pieniny';

@NgModule({
  declarations: [
    App,
    Start,
    Tatry,
    Beskidy,
    Pieniny
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
