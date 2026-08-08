import { Component, inject } from '@angular/core';
import { CharactersService } from './service/characters.service';
import { Character } from './components/character/character';
import { Loader } from '../../shared/components/loader/loader';

@Component({
  selector: 'app-characters-page',
  imports: [Character, Loader],
  templateUrl: './characters-page.html',
  styleUrl: './characters-page.css',
})
export class CharactersPage {
  public charactersService = inject(CharactersService);

  constructor() {
    this.charactersService.getAll();
  }
}
