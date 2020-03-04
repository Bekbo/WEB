import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FilmsComponent} from './films/films.component';
import {FilmComponent} from './film/film.component';

const routes: Routes = [
  { path: '',  redirectTo: '/films' , pathMatch: 'full' } ,
  { path: 'films', component: FilmsComponent },
  {path : 'films/:id', component: FilmComponent}
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
