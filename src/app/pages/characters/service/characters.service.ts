import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { Observable } from "rxjs";
import { CharacterServerResponse } from "./characters-server-types";

@Service()
export class CharactersService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://www.swapi.tech/api/people'

  getAll(): Observable<CharacterServerResponse> {
    return this.http.get<CharacterServerResponse>(this.baseUrl, {
      params: {
        expanded: true,
        limit: 50,
        page: 1,
      }
    });
  }

  getById(id: number): Observable<CharacterServerResponse> {
    return this.http.get<CharacterServerResponse>(`${this.baseUrl}/${id}`)
  }
}