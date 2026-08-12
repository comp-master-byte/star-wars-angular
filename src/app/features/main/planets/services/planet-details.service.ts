import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { PlanetSingleServerResponse } from './planets-server-types';
import { planetSinglePropertyMapping } from './planets-api-mapping';
import { PlanetsDict, PlanetType } from '@shared/domain';
import { API_CORE } from '@shared/consts';

@Injectable({
  providedIn: 'root',
})
export class PlanetDetailsService {
  private http = inject(HttpClient);
  public error = signal('');
  public isPlanetLoading = signal(false);
  public selectedPlanet = signal<PlanetType | null>(null);
  public cachedPlanets = signal<PlanetsDict>({});

  getPlanetById(id: string) {
    if (this.cachedPlanets()[id]) {
      this.selectedPlanet.set(this.cachedPlanets()[id]);
      return;
    }

    this.isPlanetLoading.set(true);
    this.http
      .get<PlanetSingleServerResponse>(`${API_CORE}/people/${id}`)
      .pipe(finalize(() => this.isPlanetLoading.set(false)))
      .subscribe({
        next: (response) => {
          const mappedResponse = planetSinglePropertyMapping(response);
          this.selectedPlanet.set(mappedResponse);
          this.cachedPlanets.update((dict) => ({
            ...dict,
            [mappedResponse.id]: mappedResponse,
          }));
        },
        error: () => {
          this.error.set(`Ошибка при загрузке данных о герое #${id}`);
        },
      });
  }
}
