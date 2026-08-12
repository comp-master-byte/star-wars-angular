import { Component, inject } from '@angular/core';
import { CharactersService } from './services/characters.service';
import { CharactersList } from './components/characters-list/characters-list';
import { Loader } from '@shared/components';

@Component({
  selector: 'app-characters-page',
  imports: [Loader, CharactersList],
  templateUrl: './characters-page.html',
  styleUrl: './characters-page.css',
})
export class CharactersPage {
  public charactersService = inject(CharactersService);

  constructor() {
    this.charactersService.getAll();
  }
}
