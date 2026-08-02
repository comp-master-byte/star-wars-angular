import { Component, input } from '@angular/core';
import { CharacterType } from '../../../../shared';

@Component({
  selector: 'app-character',
  imports: [],
  templateUrl: './character.html',
  styleUrl: './character.css',
})
export class Character {
  character = input<CharacterType>();
}
