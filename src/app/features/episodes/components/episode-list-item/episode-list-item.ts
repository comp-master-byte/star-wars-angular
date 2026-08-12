import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EpisodeType } from '@shared/domain';
@Component({
  selector: 'app-episode-list-item',
  imports: [],
  templateUrl: './episode-list-item.html',
  styleUrl: './episode-list-item.css',
})
export class EpisodeListItem {
  private router = inject(Router);
  @Input() episode!: EpisodeType;

  handleFilmCardClick() {
    const episode = this.episode;
    if(!episode) return;
    this.router.navigate([`/episodes/${episode.episodeId}`]);
  }
}
