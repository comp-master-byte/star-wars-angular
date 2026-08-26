import { Component, inject } from '@angular/core';
import { PlanetsService } from './services/planets.service';
import { Input, Loader } from '@shared/components/ui';
import { PlanetsList } from './components/planets-list/planets-list';
import { ServerError } from '@shared/components/common';

@Component({
  selector: 'app-planets',
  imports: [PlanetsList, Loader, Input, ServerError],
  templateUrl: './planets.html',
})
export class Planets {
  planetsService = inject(PlanetsService);
  public query = '';

  constructor() {
    this.planetsService.getAll();
  }
}
