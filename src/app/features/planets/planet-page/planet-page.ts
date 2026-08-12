import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetDetailsService } from '../services/planet-details.service';

@Component({
  selector: 'app-planet-page',
  imports: [],
  templateUrl: './planet-page.html',
  styleUrl: './planet-page.css',
})
export class PlanetPage {
  private activatedRoute = inject(ActivatedRoute);
  public planetDetailsService = inject(PlanetDetailsService);

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      const planetId = params['id'];
      this.planetDetailsService.getPlanetById(planetId);
    })
  }

}
