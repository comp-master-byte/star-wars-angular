import { Component, inject, OnInit } from '@angular/core';
import { FilmsService } from './services/films.service';
import { Loader } from '../../shared/components/loader/loader';
import { FormsModule } from '@angular/forms';
import { Input } from '../../shared/ui/input/input';
import { FilterListPipe } from '../../shared/pipes/filter-list-pipe';
import { FilmType } from '../../shared/domain/film';
import { EmptySearch } from '../../shared/components/empty-search/empty-search';
import { ServerError } from '../../shared/components/server-error/server-error';
import { EpisodeListItem } from './components/episode-list-item/episode-list-item';

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
