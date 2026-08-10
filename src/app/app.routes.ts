import { Routes } from '@angular/router';
import { FilmsPage } from './features/films/films-page';
import { Planets } from './features/planets/planets';
import { Species } from './features/species/species';
import { Vehicles } from './features/vehicles/vehicles';
import { Starships } from './features/starships/starships';
import { CharactersPage } from './features/characters/characters-page';

export const routes: Routes = [
  {path: '', component: CharactersPage},
  {path: 'films', component: FilmsPage},
  {path: 'planets', component: Planets},
  {path: 'species', component: Species},
  {path: 'vehicles', component: Vehicles},
  {path: 'starships', component: Starships},
];
