import { Component, input } from '@angular/core';
import { EpisodeListItem } from '../episode-list-item/episode-list-item';
import { FilterListPipe } from '@shared/pipes';
import { EpisodeType } from '@shared/domain';
import { EmptySearch } from '@shared/components/common';

@Component({
  selector: 'app-episodes-list',
  imports: [EpisodeListItem, FilterListPipe, EmptySearch],
  templateUrl: './episodes-list.html',
})
export class EpisodesList {
  public query = input('');
  public episodes = input<EpisodeType[]>([]);
  public searchQuery: (keyof EpisodeType)[] = ['title', 'openingCrawl', 'releaseDate', 'producer', 'director'];
}
