import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FilmCard } from './components/film-card/film-card';
import { FilmsService } from './services/films-service';
import { FilmType } from '../../shared/domain/film';
import { filmsResponseMapping } from './services/films-api-mapping';

@Component({
  selector: 'app-films-page',
  imports: [FilmCard],
  templateUrl: './films-page.html',
  styleUrl: './films-page.css',
})
export class FilmsPage implements OnInit {
  filmsService = inject(FilmsService);
  isLoading = signal<boolean>(false);
  films = signal<Record<string, FilmType>>({});

  ngOnInit(): void {
    this.isLoading.set(true);
    this.filmsService.getAll().subscribe((filmsResponse) => {
      const mappedResponse = filmsResponseMapping(filmsResponse);
      this.films.set(mappedResponse);
      this.isLoading.set(false);
    })
  }

  filmsList = computed(() => {
    return Object.values(this.films());
  })
}
