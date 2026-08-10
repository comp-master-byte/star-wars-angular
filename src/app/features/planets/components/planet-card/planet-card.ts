import { Component, Input } from '@angular/core';
import { PlanetType } from '../../../../shared/domain/planet';

@Component({
  selector: 'app-planet-card',
  imports: [],
  templateUrl: './planet-card.html',
  styleUrl: './planet-card.css',
})
export class PlanetCard {
  @Input() planet!: PlanetType;

  formatNumber(value: number | null): string {
    return value === null ? 'Unknown' : value.toLocaleString();
  }
}
