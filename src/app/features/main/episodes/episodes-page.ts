import { Component, inject } from '@angular/core';
import { EpisodesService } from './services/episodes.service';
import { FormsModule } from '@angular/forms';
import { Loader, ServerError } from '@shared/components';
import { Input } from '@shared/ui';
import { EpisodesList } from './components/episodes-list/episodes-list';

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
  styleUrl: './episodes-page.css',
})
export class EpisodesPage {
  public episodesService = inject(EpisodesService);
  public query = '';

  constructor() {
    this.episodesService.getAll();
  }
}
