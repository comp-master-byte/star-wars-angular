import { Component, Input } from '@angular/core';
import { ServerError } from '../../../../shared/components/server-error/server-error';
import { Input as InputUI } from '../../../../shared/ui/input/input';
import { CharacterListItem } from '../character-list-item/character-list-item';
import { EmptySearch } from '../../../../shared/components/empty-search/empty-search';
import { CharacterType } from '../../../../shared';
import { FilterListPipe } from '../../../../shared/pipes/filter-list-pipe';

@Component({
  selector: 'app-characters-list',
  imports: [ServerError, InputUI, CharacterListItem, EmptySearch, FilterListPipe],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.css',
})
export class CharactersList {
  @Input() characters: CharacterType[] = [];
  @Input() error: string = '';
  public query = '';
  public readonly queryKeys: (keyof CharacterType)[] = ['name', 'gender', 'birthYear', 'designation'];
}
