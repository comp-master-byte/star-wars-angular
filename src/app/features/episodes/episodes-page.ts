import { Component, inject, OnInit } from '@angular/core';
import { FilmsService } from './services/films.service';
import { FormsModule } from '@angular/forms';
import { EpisodeListItem } from './components/episode-list-item/episode-list-item';
import { EmptySearch, Loader, ServerError } from '@shared/components';
import { FilterListPipe } from '@shared/pipes';
import { FilmType } from '@shared/domain';
import { Input } from '@shared/ui';

@Component({
  selector: 'app-episodes-page',
  imports: [
    EpisodeListItem, 
    Loader, 
    FormsModule, 
    FilterListPipe, 
    Input, 
    EmptySearch, 
    ServerError
  ],
  templateUrl: './episodes-page.html',
  styleUrl: './episodes-page.css',
})
export class EpisodesPage implements OnInit {
  public filmsService = inject(FilmsService);
  public query = '';
  public searchQuery: (keyof FilmType)[] = ['title', 'openingCrawl', 'releaseDate', 'producer', 'director'];

  ngOnInit(): void {
    this.filmsService.getAll();
  }
}
