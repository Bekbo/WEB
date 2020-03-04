import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {films} from './Films';
import {Film} from './Film';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  films: Film[] = [];
  constructor( ) { }

  getFilms(): Observable<Film[]> {
    return of(films);
  }
  getFilm(id: number): Observable<Film> {
    return of(films[id]);
  }

  // updateHero(hero: Film): Observable<any> {
  //   return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }

}
