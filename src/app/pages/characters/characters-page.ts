import { Component, computed, inject, signal } from '@angular/core';
import { CharactersService } from './service/characters.service';
import { characterPropertiesMapping } from './service/characters-api-mapping';
import { CharacterType } from '../../shared';
import { Character } from './components/character/character';

@Component({
  selector: 'app-characters-page',
  imports: [Character],
  templateUrl: './characters-page.html',
  styleUrl: './characters-page.css',
})
export class CharactersPage {
  private charactersService = inject(CharactersService);
  characters = signal<Record<string, CharacterType>>({});
  totalPages = signal<number>(0);
  totalCharacters = signal<number>(0);
  isCharactersLoading = signal<boolean>(false);
  error = signal<string>('');

  constructor() {
    if(this.charactersList.length > 0) {
      return;
    }

    this.isCharactersLoading.set(true);
    this.error.set('');
    this.characters.set({});

    this.charactersService.getAll().subscribe(({
      next: (response) => {
        const mappedResponse = characterPropertiesMapping(response.results);
        this.characters.set(mappedResponse);
        this.totalCharacters.set(response.total_records);
        this.totalPages.set(response.total_pages);
        this.isCharactersLoading.set(false);
      },
      error: (error) => {
        this.error.set(error)
      }
    }))
  }

  charactersList = computed(() => {
    return Object.values(this.characters());
  })
}
