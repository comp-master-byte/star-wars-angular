import { Component, inject } from '@angular/core';
import { CharacterDetailsService } from '../services/character-details.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Loader } from '../../../shared/components/loader/loader';

@Component({
  selector: 'app-character-page',
  imports: [Loader, RouterLink],
  templateUrl: './character-page.html',
  styleUrl: './character-page.css',
})
export class CharacterPage {
  private activatedRoute = inject(ActivatedRoute);
  public characterDetailsService = inject(CharacterDetailsService);

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      const characterId = params['id'];
      this.characterDetailsService.getCharacterById(characterId);
    });
  }
}
