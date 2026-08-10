import { Component, inject } from '@angular/core';
import { CharacterDetailsService } from '../service/character-details.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-character-page',
  imports: [],
  templateUrl: './character-page.html',
  styleUrl: './character-page.css',
})
export class CharacterPage {
  private activatedRoute = inject(ActivatedRoute);
  characterDetailsService = inject(CharacterDetailsService);

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      const characterId = params['id'];
      this.characterDetailsService.getCharacterById(characterId);
    });
  }
}
