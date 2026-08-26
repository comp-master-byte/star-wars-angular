import { Component, inject } from '@angular/core';
import { CharactersService } from './services/characters.service';
import { CharactersList } from './components/characters-list/characters-list';
import { Input, Loader } from '@shared/components/ui';
import { ServerError } from '@shared/components/common';

@Component({
  selector: 'app-characters-page',
  imports: [Loader, CharactersList, Input, ServerError],
  templateUrl: './characters-page.html',
})
export class CharactersPage {
  public charactersService = inject(CharactersService);
  public query = '';

  constructor() {
    this.charactersService.getAll();
  }
}
