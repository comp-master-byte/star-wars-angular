import { Component, inject } from '@angular/core';
import { CharactersService } from './services/characters.service';
import { Loader } from '../../shared/components/loader/loader';
import { CharactersList } from './components/characters-list/characters-list';

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
