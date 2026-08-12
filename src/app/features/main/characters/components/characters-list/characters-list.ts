import { Component, input } from '@angular/core';
import { CharacterListItem } from '../character-list-item/character-list-item';
import { EmptySearch } from '@shared/components';
import { FilterListPipe } from '@shared/pipes';
import { CharacterType } from '@shared/domain';

@Component({
  selector: 'app-characters-list',
  imports: [CharacterListItem, EmptySearch, FilterListPipe],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.css',
})
export class CharactersList {
  public characters = input<CharacterType[]>([]);
  public query = input('');
  public readonly queryKeys: (keyof CharacterType)[] = ['name', 'gender', 'birthYear', 'designation'];
}
