import { Routes } from '@angular/router';
import { AuthPage } from '@features/auth/auth-page';
import {
  CharacterPage,
  CharactersPage,
  EpisodePage,
  EpisodesPage,
  PlanetPage,
  Planets,
  Species,
  Starships,
  Vehicles,
} from '@features/main';
import { MainLayout } from '@features/main/layout/main-layout';
import { authGuard, loggedInGuard } from '@shared/guards';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthPage,
    canActivate: [loggedInGuard],
  },
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      { path: '', component: CharactersPage },
      { path: 'characters/:id', component: CharacterPage },
      { path: 'episodes', component: EpisodesPage },
      { path: 'episodes/:id', component: EpisodePage },
      { path: 'planets', component: Planets },
      { path: 'planets/:id', component: PlanetPage },
      { path: 'species', component: Species },
      { path: 'vehicles', component: Vehicles },
      { path: 'starships', component: Starships },
    ],
  },
  { path: '**', redirectTo: 'auth' },
];
