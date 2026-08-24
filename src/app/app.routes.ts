import { Routes } from '@angular/router';
import {
  AccountLayout,
  AppearancePage,
  FavoritesPage,
  ProfilePage,
  SecurityPage,
  SettingsLayout,
} from '@features/account';
import { SignUpPage } from '@features/auth';
import { AuthPage } from '@features/auth/sign-in/auth-page';
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
    path: 'sign-in',
    component: AuthPage,
    canActivate: [loggedInGuard],
  },
  {
    path: 'sign-up',
    component: SignUpPage,
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
  {
    path: 'account',
    component: AccountLayout,
    canActivate: [authGuard],
    children: [
      { path: 'profile', component: ProfilePage },
      { path: 'favorites', component: FavoritesPage },
      {
        path: 'settings',
        component: SettingsLayout,
        children: [
          { path: 'appearance', component: AppearancePage },
          { path: 'security', component: SecurityPage },
        ],
      },
    ],
  },
  { path: '**', redirectTo: 'sign-in' },
];
