import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Normalny } from './comoponents/normalny/normalny';
import { Start } from './comoponents/start/start';
import { Nudny } from './comoponents/nudny/nudny';
import { Zarabisty } from './comoponents/zarabisty/zarabisty';

const routes: Routes = [
  {path: '',component: Start},
  {path: 'normalny', component: Normalny},
  {path: 'nudny', component: Nudny},
  {path: 'zarabisty', component: Zarabisty},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
