import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { PlanetsDict } from '../../../shared/domain/planet';
import { PlanetServerType } from './planets-server-types';
import { planetsResponseMapping } from './planets-api-mapping';
import { API_CORE } from '../../../shared/consts';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private http = inject(HttpClient);
  isLoading = signal<boolean>(false);
  planets = signal<PlanetsDict>({});
  error = signal('')

  getAll() {
    if (this.planetsList().length > 0 || this.isLoading()) {
      return;
    }
    
    this.isLoading.set(true);

    this.http.get<PlanetServerType>(`${API_CORE}/planets`, {
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
        this.error.set('Произошла ошибка при загрузке данных');
      },
    })
  }

  planetsList = computed(() => {
    return Object.values(this.planets());
  })
}
