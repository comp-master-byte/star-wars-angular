import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";
import { Observable } from "rxjs";
import { CharacterServerResponse } from "./characters-server-types";
import { CharacterDict } from "../../../shared";
import { characterPropertiesMapping } from "./characters-api-mapping";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://www.swapi.tech/api/people'
  public charachets = signal<CharacterDict>({});
  public isLoading = signal<boolean>(false);
  public totalPages = signal<number>(0);
  public totalCharacters = signal<number>(0);

  getAll() {
    if(this.charactersList().length > 0) {
      return;
    }

    this.isLoading.set(true);
    this.http.get<CharacterServerResponse>(this.baseUrl, {
      params: {
        expanded: true,
        limit: 50,
        page: 1,
      }
    }).subscribe((response) => {
      const mappedResponse = characterPropertiesMapping(response.results);
      this.charachets.set(mappedResponse);
      this.totalCharacters.set(response.total_records);
      this.totalPages.set(response.total_pages);
      this.isLoading.set(false);
    })
  }

  getById(id: number): Observable<CharacterServerResponse> {
    return this.http.get<CharacterServerResponse>(`${this.baseUrl}/${id}`)
  }

  charactersList = computed(() => {
    return Object.values(this.charachets());
  })
}