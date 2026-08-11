import { Component, inject, Input } from '@angular/core';
import { FilmType } from '../../../../shared/domain/film';
import { Router } from '@angular/router';
@Component({
  selector: 'app-episode-list-item',
  imports: [],
  templateUrl: './episode-list-item.html',
  styleUrl: './episode-list-item.css',
})
export class EpisodeListItem {
  private router = inject(Router);
  @Input() film!: FilmType;

  handleFilmCardClick() {
    this.router.navigate([`/episodes/${this.film.episodeId}`]);
  }
}
