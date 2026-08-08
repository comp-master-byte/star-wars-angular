import { Component, inject, OnInit } from '@angular/core';
import { FilmCard } from './components/film-card/film-card';
import { FilmsService } from './services/films-service';

@Component({
  selector: 'app-films-page',
  imports: [FilmCard],
  templateUrl: './films-page.html',
  styleUrl: './films-page.css',
})
export class FilmsPage implements OnInit {
  public filmsService = inject(FilmsService);

  ngOnInit(): void {
    this.filmsService.getAll();
  }
}
