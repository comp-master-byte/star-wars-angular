import { Component, input } from '@angular/core';
import { PlanetType } from '@shared/domain';
import { PlanetListItem } from '../planet-list-item/planet-list-item';
import { FilterListPipe } from '@shared/pipes';
import { EmptySearch } from '@shared/components';

@Component({
  selector: 'app-planets-list',
  imports: [PlanetListItem, FilterListPipe, EmptySearch],
  templateUrl: './planets-list.html',
})
export class PlanetsList {
  public planets = input<PlanetType[]>([]);
  public query = input('');
  public readonly queryKeys: (keyof PlanetType)[] = ['name', 'climate', 'terrain', 'gravity'];
}
