import { Component } from '@angular/core';
import { FILMS } from '../../constants/films.constants';
import { Film } from '../../models/film.model';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-catalog-page',
  standalone: false,
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.css'
})
export class CatalogPageComponent {
  constructor(
    private _filmsService: FilmsService
  ) { }

  public get films(): Film[] {
    return this._filmsService.filteredFilms
  }
}
