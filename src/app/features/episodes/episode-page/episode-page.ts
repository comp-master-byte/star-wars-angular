import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EpisodeDetailsService } from '../services/film-details.service';

@Component({
  selector: 'app-episode-page',
  imports: [RouterLink],
  templateUrl: './episode-page.html',
  styleUrl: './episode-page.css',
})
export class EpisodePage {
  public episodeDetailsService = inject(EpisodeDetailsService);
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      const episode = params['id'];
      this.episodeDetailsService.getEpisodeById(episode);
    })
  }
}
