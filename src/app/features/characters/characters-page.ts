import { Component, inject } from '@angular/core';
import { CharactersService } from './service/characters.service';
import { Loader } from '../../shared/components/loader/loader';
import { FilterListPipe } from '../../shared/pipes/filter-list-pipe';
import { Input } from '../../shared/ui/input/input';
import { CharacterType } from '../../shared';
import { CharacterListItem } from './components/character-list-item/character-list-item';

@Component({
  selector: 'app-characters-page',
  imports: [Input, CharacterListItem, Loader, FilterListPipe],
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
