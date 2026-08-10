import { Component, Input } from '@angular/core';
import { FilmType } from '../../../../shared/domain/film';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.css',
})
export class FilmCard {
  @Input() film!: FilmType;
}
