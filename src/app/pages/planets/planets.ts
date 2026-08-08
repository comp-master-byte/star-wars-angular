import { Component, inject } from '@angular/core';
import { PlanetsService } from './services/planets-service';
import { PlanetCard } from './components/planet-card/planet-card';
import { Loader } from '../../shared/components/loader/loader';

@Component({
  selector: 'app-planets',
  imports: [PlanetCard, Loader],
  templateUrl: './planets.html',
  styleUrl: './planets.css',
})
export class Planets {
  planetsService = inject(PlanetsService);

  constructor() {
    this.planetsService.getAll();
  }
}
