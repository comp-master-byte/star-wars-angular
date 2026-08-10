import { inject, Injectable, signal } from '@angular/core';
import { CharacterDict, CharacterType } from '../../../shared';
import { HttpClient } from '@angular/common/http';
import { API_CORE } from '../../../shared/consts';
import { characterSinglePropertyMapping } from './characters-api-mapping';
import { CharacterSingleServerResponse } from './characters-server-types';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailsService {
  private http = inject(HttpClient);
  isCharacterLoading = signal(false);
  selectedCharacter = signal<CharacterType|null>(null);
  cachedCharacters = signal<CharacterDict>({});

  getCharacterById(id: string): CharacterType | void {
    if(this.cachedCharacters()[id]) {
      this.selectedCharacter.set(this.cachedCharacters()[id]);
      return;
    }

    this.isCharacterLoading.set(true);
    this.http.get<CharacterSingleServerResponse>(`${API_CORE}/people/${id}`).subscribe((response) => {
      const mappedResponse = characterSinglePropertyMapping(response);
      this.selectedCharacter.set(mappedResponse);
      this.cachedCharacters.update((dict) => ({
        ...dict,
        [mappedResponse.id]: mappedResponse,
      }))
      this.isCharacterLoading.set(false);
    })
  }
}
