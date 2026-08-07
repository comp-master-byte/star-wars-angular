import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  routes = [
    {path: '/', name: 'Персонажи'},
    {path: '/films', name: 'Фильмы'},
    {path: '/planets', name: 'Планеты'},
    // {path: '/species', name: 'Биологический вид'},
    // {path: '/starships', name: 'Зведные корабли'},
    // {path: '/vehicles', name: 'Транспортные средства'},
  ]
}
