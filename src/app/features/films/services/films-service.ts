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
  error = signal('')

  getAll() {
    if(this.filmsList().length > 0) {
      return;
    }

    this.isLoading.set(true);
    this.error.set('');

    this.http.get<FilmsServerResponse>(`${API_CORE}/films`, {
      params: {
        expanded: true,
      }
    }).subscribe({
      next: (response) => {
        const mappedResponse = filmsResponseMapping(response);
        this.films.set(mappedResponse);
        this.isLoading.set(false); 
      },
      error: () => {
        this.error.set('Произошла ошибка при загрузке данных');
        this.isLoading.set(false);
      }
    })
  }

  filmsList = computed(() => {
    return Object.values(this.films());
  })
}
