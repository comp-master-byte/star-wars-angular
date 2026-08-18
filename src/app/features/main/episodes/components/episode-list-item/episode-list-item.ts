import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { EpisodeType } from '@shared/domain';
import { RenderListItem } from '@shared/ui';
@Component({
  selector: 'app-episode-list-item',
  imports: [RenderListItem],
  templateUrl: './episode-list-item.html',
  styleUrl: './episode-list-item.css',
})
export class EpisodeListItem {
  private router = inject(Router);
  public episode = input.required<EpisodeType>();

  handleEpisodeCardClick() {
    this.router.navigate([`/episodes/${this.episode().episodeId}`]);
  }
}
