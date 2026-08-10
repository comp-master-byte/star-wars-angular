import { Component, input } from '@angular/core';
import { CharacterType } from '../../../../shared';

@Component({
  selector: 'app-character-list-item',
  imports: [],
  templateUrl: './character-list-item.html',
  styleUrl: './character-list-item.css',
})
export class CharacterListItem {
  character = input<CharacterType>();
}
