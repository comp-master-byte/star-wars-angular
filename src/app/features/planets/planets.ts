import { Component, inject } from '@angular/core';
import { PlanetsService } from './services/planets.service';
import { PlanetListItem } from './components/planet-list-item/planet-list-item';
import { Loader } from '../../shared/components/loader/loader';
import { PlanetType } from '../../shared/domain/planet';
import { Input } from '../../shared/ui/input/input';
import { FilterListPipe } from '../../shared/pipes/filter-list-pipe';
import { EmptySearch } from '../../shared/components/empty-search/empty-search';
import { ServerError } from '../../shared/components/server-error/server-error';

@Component({
  selector: 'app-planets',
  imports: [PlanetListItem, Loader, Input, FilterListPipe, EmptySearch, ServerError],
  templateUrl: './planets.html',
  styleUrl: './planets.css',
})
export class Planets {
  planetsService = inject(PlanetsService);
  public query = '';
  public readonly queryKeys: (keyof PlanetType)[] = ['name', 'climate', 'terrain', 'gravity'];

  constructor() {
    this.planetsService.getAll();
  }
}
