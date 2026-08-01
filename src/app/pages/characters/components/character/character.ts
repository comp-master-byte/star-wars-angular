import { Component, input } from '@angular/core';
import { CharacterType } from '../../../../shared';
import { CHARACTERS_FULL_DATA_DICT } from '../../characters-images';

@Component({
  selector: 'app-character',
  imports: [],
  templateUrl: './character.html',
  styleUrl: './character.css',
})
export class Character {
  character = input<CharacterType>();
  charactersExtraData = CHARACTERS_FULL_DATA_DICT;
}
