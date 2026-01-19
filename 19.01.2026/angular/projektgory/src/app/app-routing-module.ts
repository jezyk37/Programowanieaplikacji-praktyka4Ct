import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Tatry } from './comoponents/tatry/tatry';
import { Start } from './comoponents/start/start';
import { Beskidy } from './comoponents/beskidy/beskidy';
import { Pieniny } from './comoponents/pieniny/pieniny';
const routes: Routes = [

  {path: '',component: Start},
  {path: 'pieniny', component: Pieniny},
  {path: 'beskidy', component: Beskidy},
  {path: 'tatry', component: Tatry},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
