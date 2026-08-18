import { Component, inject, input } from '@angular/core';
import {Router} from '@angular/router';
import { CharacterType } from '@shared/domain';
import { RenderListItem } from '@shared/ui';

@Component({
  selector: 'app-character-list-item',
  imports: [RenderListItem],
  templateUrl: './character-list-item.html',
  styleUrl: './character-list-item.css',
})
export class CharacterListItem {
  private router = inject(Router);
  public character = input.required<CharacterType>();

  handleCharacterItemClick() {
    const character = this.character();
    this.router.navigate([`/characters/${character.id}`])
  }
}
