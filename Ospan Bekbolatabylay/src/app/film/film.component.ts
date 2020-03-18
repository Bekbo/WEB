import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../Film';
import {ActivatedRoute} from '@angular/router';
import {FilmsService} from '../films.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input() film: Film;
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getfilm();
  }

  getfilm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmService.getFilm(id).subscribe(film => this.film = film);
    this.film.viewCount++;
  }
  goBack() {
    this.location.back();
  }
}
