import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Start } from './components/start/start';
import { Aniacjapierwsza } from './components/aniacjapierwsza/aniacjapierwsza';
import { Aniacjadruga } from './components/aniacjadruga/aniacjadruga';
import { Aniacjatrzecia } from './components/aniacjatrzecia/aniacjatrzecia';

const routes: Routes = [
  {path: '', component: Start},
  {path: 'animacjapierwsza', component: Aniacjapierwsza},
  {path: 'animacjadruga', component: Aniacjadruga},
  {path: 'animacjatrzecia', component: Aniacjatrzecia},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
