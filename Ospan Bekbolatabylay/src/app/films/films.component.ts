import { Component, OnInit } from '@angular/core';
import {Film} from '../Film';
import {FilmsService} from '../films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: Film[] = [];
  constructor(private filmService: FilmsService) { }

  ngOnInit(): void {
    this.getFilms();
  }
  getFilms() {
    this.filmService.getFilms()
      .subscribe(films => this.films = films);
  }

}
