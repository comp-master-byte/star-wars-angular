import { Component, inject, input } from '@angular/core';
import {Router} from '@angular/router';
import { CharacterType } from '@shared/domain';

@Component({
  selector: 'app-character-list-item',
  imports: [],
  templateUrl: './character-list-item.html',
  styleUrl: './character-list-item.css',
})
export class CharacterListItem {
  router = inject(Router);
  character = input<CharacterType>();

  navigateToCharacterSinglePage() {
    const character = this.character();
    if(!character) return;
    this.router.navigate([`/characters/${character.id}`])
  }
}
