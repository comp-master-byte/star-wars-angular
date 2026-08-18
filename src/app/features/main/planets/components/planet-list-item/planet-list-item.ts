import { Component, inject, input, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlanetType } from '@shared/domain';
import { RenderListItem } from '@shared/ui';

@Component({
  selector: 'app-planet-list-item',
  imports: [RenderListItem],
  templateUrl: './planet-list-item.html',
  styleUrl: './planet-list-item.css',
})
export class PlanetListItem {
  private router = inject(Router);
  public planet = input.required<PlanetType>();

  handlePlanetItemClick() {
    this.router.navigate([`/planets/${this.planet().id}`]);
  }
}
