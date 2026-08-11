import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";
import { CharacterServerResponse } from "./characters-server-types";
import { CharacterDict } from "../../../shared";
import { characterPropertiesMapping } from "./characters-api-mapping";
import { API_CORE } from "../../../shared/consts";
import { CharacterDetailsService } from "./character-details.service";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private http = inject(HttpClient);
  private characterDetailsService = inject(CharacterDetailsService);
  public characters = signal<CharacterDict>({});
  public isLoading = signal<boolean>(false);
  public totalPages = signal<number>(0);
  public totalCharacters = signal<number>(0);
  public error = signal('')

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
    }).subscribe({
      next: (response) => {
        const mappedResponse = characterPropertiesMapping(response.results);
        this.characters.set(mappedResponse);
        this.characterDetailsService.cachedCharacters.set(mappedResponse);
        this.totalCharacters.set(response.total_records);
        this.totalPages.set(response.total_pages);
        this.isLoading.set(false);
      }, 
      error: () => {
        this.error.set('Произошла ошибка при загрузке данных');
        this.isLoading.set(false);
      }
    })
  }

  charactersList = computed(() => {
    return Object.values(this.characters());
  })
}