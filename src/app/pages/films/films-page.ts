import { Component, inject, OnInit } from '@angular/core';
import { FilmCard } from './components/film-card/film-card';
import { FilmsService } from './services/films-service';
import { Loader } from '../../shared/components/loader/loader';
import { FormsModule } from '@angular/forms';
import { FilmsPipe } from './films-pipe';

@Component({
  selector: 'app-films-page',
  imports: [FilmCard, Loader, FormsModule, FilmsPipe],
  templateUrl: './films-page.html',
  styleUrl: './films-page.css',
})
export class FilmsPage implements OnInit {
  public filmsService = inject(FilmsService);
  public searchFilmField = '';

  ngOnInit(): void {
    this.filmsService.getAll();
  }
}
