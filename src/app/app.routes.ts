import { Routes } from '@angular/router';
import { Characters } from './pages/characters/characters';
import { Films } from './pages/films/films';
import { Planets } from './pages/planets/planets';
import { Species } from './pages/species/species';
import { Vehicles } from './pages/vehicles/vehicles';
import { Starships } from './pages/starships/starships';

export const routes: Routes = [
  {path: '', component: Characters},
  {path: 'films', component: Films},
  {path: 'planets', component: Planets},
  {path: 'species', component: Species},
  {path: 'vehicles', component: Vehicles},
  {path: 'starships', component: Starships},
];
