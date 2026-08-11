import { inject, Injectable, signal } from '@angular/core';
import { FilmDict, FilmType } from '../../../shared/domain/film';
import { HttpClient } from '@angular/common/http';
import { API_CORE } from '../../../shared/consts';
import { finalize } from 'rxjs';
import { EpisodeSingleServerResponse } from './films-server-types';
import { episodeSingleResponseMapping } from './films-api-mapping';

@Injectable({
  providedIn: 'root'
})
export class EpisodeDetailsService {
  private http = inject(HttpClient);
  public error = signal('');
  public isEpisodeLoading = signal(false);
  public selectedEpisode = signal<FilmType|null>(null);
  public cachedEpisodes = signal<FilmDict>({});

  getEpisodeById(id: string) {
    if(this.cachedEpisodes()[id]) {
      this.selectedEpisode.set(this.cachedEpisodes()[id]);
      return;
    }

    this.isEpisodeLoading.set(true);
    this.error.set('');

    this.http.get<EpisodeSingleServerResponse>(`${API_CORE}/films/${id}`)
      .pipe(finalize(() => this.isEpisodeLoading.set(false)))
      .subscribe({
        next: (response) => {
          const mappedResponse = episodeSingleResponseMapping(response);
          this.selectedEpisode.set(mappedResponse);
          this.cachedEpisodes.update((dict) => ({
            ...dict,
            [mappedResponse.episodeId]: mappedResponse,
          }))
        },
        error: () => {
          this.error.set(`Ошибка при загрузке эпизода ${id}`)
        }
      })
  }
}
