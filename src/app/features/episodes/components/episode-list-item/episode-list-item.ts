import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FilmType } from '@shared/domain';
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
    const episode = this.film;
    if(!episode) return;
    this.router.navigate([`/episodes/${episode.episodeId}`]);
  }
}
