import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { PlanetsDict } from '../../../shared/domain/planet';
import { PlanetServerType } from './planets-server-types';
import { planetsResponseMapping } from './planets-api-mapping';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private http = inject(HttpClient);
  private endpoint = 'https://swapi.tech/api/planets';
  isLoading = signal<boolean>(false);
  planets = signal<PlanetsDict>({});

  getAll() {
    if (this.planetsList().length > 0 || this.isLoading()) {
      return;
    }
    
    this.isLoading.set(true);

    this.http.get<PlanetServerType>(this.endpoint, {
      params: {
        expanded: true,
        limit: 50,
        page: 1,
      }
    }).subscribe({
      next: (response) => {
        const mappedResponse = planetsResponseMapping(response);
        this.planets.set(mappedResponse);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      },
    })
  }

  planetsList = computed(() => {
    return Object.values(this.planets());
  })
}
