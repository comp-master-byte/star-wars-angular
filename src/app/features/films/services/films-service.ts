import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { FilmsServerResponse } from './films-server-types';
import { API_CORE } from '../../../shared/consts';
import { FilmDict } from '../../../shared/domain/film';
import { filmsResponseMapping } from './films-api-mapping';

@Injectable({ providedIn: 'root' })
export class FilmsService {
  http: HttpClient = inject(HttpClient);
  films = signal<FilmDict>({});
  isLoading = signal<boolean>(false);

  getAll() {
    if(this.filmsList().length > 0) {
      return;
    }

    this.isLoading.set(true);
    this.http.get<FilmsServerResponse>(`${API_CORE}/films`, {
      params: {
        expanded: true,
      }
    }).subscribe((response) => {
      const mappedResponse = filmsResponseMapping(response);
      this.films.set(mappedResponse);
      this.isLoading.set(false);      
    })
  }

  filmsList = computed(() => {
    return Object.values(this.films());
  })
}
