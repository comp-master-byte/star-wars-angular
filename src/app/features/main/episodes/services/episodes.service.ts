import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { EpisodesServerResponse } from './episodes-server-types';
import { episodesResponseMapping } from './episodes-api-mapping';
import { finalize } from 'rxjs';
import { EpisodeDetailsService } from './episode-details.service';
import { EpisodesDict } from '@shared/domain';
import { API_CORE } from '@shared/consts';

@Injectable({ 
  providedIn: 'root' 
})
export class EpisodesService {
  private http: HttpClient = inject(HttpClient);
  private episodeDetailsService = inject(EpisodeDetailsService);
  public films = signal<EpisodesDict>({});
  public isLoading = signal<boolean>(false);
  public error = signal('');

  getAll() {
    if(this.filmsList().length > 0) {
      return;
    }

    this.isLoading.set(true);
    this.error.set('');

    this.http.get<EpisodesServerResponse>(`${API_CORE}/films`, {
      params: {
        expanded: true,
      }
    })
    .pipe(finalize(() => this.isLoading.set(false)))
    .subscribe({
      next: (response) => {
        const mappedResponse = episodesResponseMapping(response);
        this.films.set(mappedResponse);
        this.episodeDetailsService.cachedEpisodes.set(mappedResponse);
      },
      error: () => {
        this.error.set('Произошла ошибка при загрузке данных');
      }
    })
  }

  filmsList = computed(() => {
    return Object.values(this.films());
  })
}
