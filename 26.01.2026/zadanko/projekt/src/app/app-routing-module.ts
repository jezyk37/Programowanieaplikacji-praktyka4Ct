import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Truskawka } from './components/truskawka/truskawka';
import { Banan } from './components/banan/banan';
import { Ananas } from './components/ananas/ananas';
import { Start } from './components/start/start';

const routes: Routes = [
  {path: 'hgghgh', component: Start},
  {path: 'ananas', component: Ananas},
  {path: 'banan', component: Banan},
  {path: 'truskawka', component: Truskawka}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
