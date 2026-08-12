import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { PlanetsDict } from '../../../shared/domain/planet';
import { PlanetServerType } from './planets-server-types';
import { planetsResponseMapping } from './planets-api-mapping';
import { API_CORE } from '../../../shared/consts';
import { finalize } from 'rxjs';
import { PlanetDetailsService } from './planet-details.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private http = inject(HttpClient);
  private planetDetailsService = inject(PlanetDetailsService);
  public planets = signal<PlanetsDict>({});
  public isLoading = signal(false);
  public error = signal('');
  public totalPages = signal(0);
  public totalPlanets = signal(0);

  getAll() {
    if (this.planetsList().length > 0 || this.isLoading()) {
      return;
    }
    
    this.isLoading.set(true);
    this.error.set('');

    this.http.get<PlanetServerType>(`${API_CORE}/planets`, {
      params: {
        expanded: true,
        limit: 50,
        page: 1,
      }
    })
    .pipe(finalize(() => this.isLoading.set(false)))
    .subscribe({
      next: (response) => {
        const mappedResponse = planetsResponseMapping(response);
        this.planets.set(mappedResponse);
        this.planetDetailsService.cachedPlanets.set(mappedResponse);
        this.totalPages.set(response.total_pages);
        this.totalPlanets.set(response.total_records);
      },
      error: () => {
        this.error.set('Произошла ошибка при загрузке данных');
      },
    })
  }

  planetsList = computed(() => {
    return Object.values(this.planets());
  })
}
