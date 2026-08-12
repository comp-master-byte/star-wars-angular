import { Component, Input } from '@angular/core';
import { CharacterListItem } from '../character-list-item/character-list-item';
import { EmptySearch, ServerError } from '@shared/components';
import { FilterListPipe } from '@shared/pipes';
import { Input as InputUI } from '@shared/ui';
import { CharacterType } from '@shared/domain';

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
