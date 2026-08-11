import { Routes } from '@angular/router';
import { EpisodesPage } from './features/episodes/episodes-page';
import { Planets } from './features/planets/planets';
import { Species } from './features/species/species';
import { Vehicles } from './features/vehicles/vehicles';
import { Starships } from './features/starships/starships';
import { CharactersPage } from './features/characters/characters-page';
import { CharacterPage } from './features/characters/character-page/character-page';
import { EpisodePage } from './features/episodes/episode-page/episode-page';

export const routes: Routes = [
  {path: '', component: CharactersPage},
  {path: 'characters/:id', component: CharacterPage},
  {path: 'episodes', component: EpisodesPage},
  {path: 'episodes/:id', component: EpisodePage},
  {path: 'planets', component: Planets},
  {path: 'species', component: Species},
  {path: 'vehicles', component: Vehicles},
  {path: 'starships', component: Starships},
];
