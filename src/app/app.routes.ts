import { Routes } from '@angular/router';
import { FilmsPage } from './pages/films/films-page';
import { Planets } from './pages/planets/planets';
import { Species } from './pages/species/species';
import { Vehicles } from './pages/vehicles/vehicles';
import { Starships } from './pages/starships/starships';
import { CharactersPage } from './pages/characters/characters-page';

export const routes: Routes = [
  {path: '', component: CharactersPage},
  {path: 'films', component: FilmsPage},
  {path: 'planets', component: Planets},
  {path: 'species', component: Species},
  {path: 'vehicles', component: Vehicles},
  {path: 'starships', component: Starships},
];
