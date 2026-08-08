import { Component, inject } from '@angular/core';
import { CharactersService } from './service/characters.service';
import { Character } from './components/character/character';
import { Loader } from '../../shared/components/loader/loader';
import { FilterListPipe } from '../../shared/pipes/filter-list-pipe';
import { Input } from '../../shared/ui/input/input';
import { CharacterType } from '../../shared';

@Component({
  selector: 'app-characters-page',
  imports: [Input, Character, Loader, FilterListPipe],
  templateUrl: './characters-page.html',
  styleUrl: './characters-page.css',
})
export class CharactersPage {
  public charactersService = inject(CharactersService);
  public query = '';
  public readonly queryKeys: (keyof CharacterType)[] = ['name', 'gender', 'birthYear', 'designation'];

  constructor() {
    this.charactersService.getAll();
  }
}
