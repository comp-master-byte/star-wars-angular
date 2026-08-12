import { Component, inject } from '@angular/core';
import { PlanetsService } from './services/planets.service';
import { Loader, ServerError } from '@shared/components';
import { Input } from '@shared/ui';
import { PlanetsList } from './components/planets-list/planets-list';

@Component({
  selector: 'app-planets',
  imports: [PlanetsList, Loader, Input, ServerError],
  templateUrl: './planets.html',
  styleUrl: './planets.css',
})
export class Planets {
  planetsService = inject(PlanetsService);
  public query = '';

  constructor() {
    this.planetsService.getAll();
  }
}
