import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '@shared/services';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  public authService = inject(AuthService);
  public routes = [
    {path: '/', name: 'Персонажи'},
    {path: '/episodes', name: 'Фильмы'},
    {path: '/planets', name: 'Планеты'},
    {path: '/species', name: 'Биологический вид'},
    {path: '/starships', name: 'Зведные корабли'},
    {path: '/vehicles', name: 'Транспортные средства'},
  ]
}
