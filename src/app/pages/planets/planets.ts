import { Component, inject } from '@angular/core';
import { PlanetsService } from './services/planets-service';
import { PlanetCard } from './components/planet-card/planet-card';
import { Loader } from '../../shared/components/loader/loader';
import { PlanetType } from '../../shared/domain/planet';
import { Input } from '../../shared/ui/input/input';
import { FilterListPipe } from '../../shared/pipes/filter-list-pipe';

@Component({
  selector: 'app-planets',
  imports: [PlanetCard, Loader, Input, FilterListPipe],
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
