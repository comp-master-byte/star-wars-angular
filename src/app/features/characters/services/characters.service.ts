import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";
import { CharacterServerResponse } from "./characters-server-types";
import { characterPropertiesMapping } from "./characters-api-mapping";
import { CharacterDetailsService } from "./character-details.service";
import { finalize } from "rxjs";
import { CharacterDict } from "@shared/domain";
import { API_CORE } from "@shared/consts";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private http = inject(HttpClient);
  private characterDetailsService = inject(CharacterDetailsService);
  public characters = signal<CharacterDict>({});
  public isLoading = signal(false);
  public error = signal('');
  public totalPages = signal(0);
  public totalCharacters = signal(0);

  getAll() {
    if(this.charactersList().length > 0) {
      return;
    }

    this.isLoading.set(true);
    this.error.set('');

    this.http.get<CharacterServerResponse>(`${API_CORE}/people`, {
      params: {
        expanded: true,
        limit: 50,
        page: 1,
      }
    })
    .pipe(finalize(() => this.isLoading.set(false)))
    .subscribe({
      next: (response) => {
        const mappedResponse = characterPropertiesMapping(response.results);
        this.characters.set(mappedResponse);
        this.characterDetailsService.cachedCharacters.set(mappedResponse);
        this.totalCharacters.set(response.total_records);
        this.totalPages.set(response.total_pages);
      }, 
      error: () => {
        this.error.set('Произошла ошибка при загрузке данных');
      }
    })
  }

  charactersList = computed(() => {
    return Object.values(this.characters());
  })
}