import { Component, inject, Input } from '@angular/core';
import { PlanetType } from '../../../../shared/domain/planet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet-list-item',
  imports: [],
  templateUrl: './planet-list-item.html',
  styleUrl: './planet-list-item.css',
})
export class PlanetListItem {
  private router = inject(Router);
  @Input() planet!: PlanetType;

  handlePlanetItemClick() {
    this.router.navigate([`/planets/${this.planet.id}`]);
  }
}
