import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { characterSinglePropertyMapping } from './characters-api-mapping';
import { CharacterSingleServerResponse } from './characters-server-types';
import { finalize } from 'rxjs';
import { CharacterDict, CharacterType } from '@shared/domain';
import { API_CORE } from '@shared/consts';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailsService {
  private http = inject(HttpClient);
  public error = signal('');
  public isCharacterLoading = signal(false);
  public selectedCharacter = signal<CharacterType|null>(null);
  public cachedCharacters = signal<CharacterDict>({});

  getCharacterById(id: string): CharacterType | void {
    if(this.cachedCharacters()[id]) {
      this.selectedCharacter.set(this.cachedCharacters()[id]);
      return;
    }

    this.isCharacterLoading.set(true);
    this.http.get<CharacterSingleServerResponse>(`${API_CORE}/people/${id}`)
      .pipe(finalize(() => this.isCharacterLoading.set(false)))
      .subscribe({
        next: (response) => {
          const mappedResponse = characterSinglePropertyMapping(response);
          this.selectedCharacter.set(mappedResponse);
          this.cachedCharacters.update((dict) => ({
            ...dict,
            [mappedResponse.id]: mappedResponse,
          }))
        },
        error: () => {
          this.error.set(`Ошибка при загрузке данных о герое #${id}`)
        }
      })
  }
}
