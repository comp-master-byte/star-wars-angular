import { Component, inject } from '@angular/core';
import { PlanetsService } from './services/planets.service';
import { PlanetListItem } from './components/planet-list-item/planet-list-item';
import { EmptySearch, Loader, ServerError } from '@shared/components';
import { FilterListPipe } from '@shared/pipes';
import { PlanetType } from '@shared/domain';
import { Input } from '@shared/ui';

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
