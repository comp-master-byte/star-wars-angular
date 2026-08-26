import { Component, input } from '@angular/core';
import { CharacterListItem } from '../character-list-item/character-list-item';
import { FilterListPipe } from '@shared/pipes';
import { CharacterType } from '@shared/domain';
import { EmptySearch } from '@shared/components/common';

@Component({
  selector: 'app-characters-list',
  imports: [CharacterListItem, EmptySearch, FilterListPipe],
  templateUrl: './characters-list.html',
})
export class CharactersList {
  public characters = input<CharacterType[]>([]);
  public query = input('');
  public readonly queryKeys: (keyof CharacterType)[] = ['name', 'gender', 'birthYear', 'designation'];
}
