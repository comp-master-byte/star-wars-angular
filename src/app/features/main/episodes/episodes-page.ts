import { Component, inject } from '@angular/core';
import { EpisodesService } from './services/episodes.service';
import { FormsModule } from '@angular/forms';
import { Input, Loader } from '@shared/components/ui';
import { EpisodesList } from './components/episodes-list/episodes-list';
import { ServerError } from '@shared/components/common';

@Component({
  selector: 'app-episodes-page',
  imports: [
    EpisodesList,
    Loader, 
    FormsModule, 
    Input, 
    ServerError
  ],
  templateUrl: './episodes-page.html',
})
export class EpisodesPage {
  public episodesService = inject(EpisodesService);
  public query = '';

  constructor() {
    this.episodesService.getAll();
  }
}
