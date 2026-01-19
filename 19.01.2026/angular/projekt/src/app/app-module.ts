import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Start } from './comoponents/start/start';
import { Nudny } from './comoponents/nudny/nudny';
import { Normalny } from './comoponents/normalny/normalny';
import { Zarabisty } from './comoponents/zarabisty/zarabisty';

@NgModule({
  declarations: [
    App,
    Start,
    Nudny,
    Normalny,
    Zarabisty
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
