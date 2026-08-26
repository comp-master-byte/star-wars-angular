import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '@shared/services';
import { ContextMenu, ContextMenuOption } from '@shared/components/ui';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive, ContextMenu],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  private router = inject(Router);
  private authService = inject(AuthService);
  public isContextMenuVisible = signal(false);
  public contextMenuOptions: ContextMenuOption[] = [
    {id: 'profile', label: 'Профиль', variant: 'default'},
    {id: 'favorites', label: 'Избранное', variant: 'default'},
    {id: 'settings', label: 'Настройки', variant: 'default'},
    {id: 'logout', label: 'Выйти', variant: 'danger'},
  ]
  public routes = [
    {path: '/', name: 'Персонажи'},
    {path: '/episodes', name: 'Фильмы'},
    {path: '/planets', name: 'Планеты'},
    {path: '/species', name: 'Биологический вид'},
    {path: '/starships', name: 'Зведные корабли'},
    {path: '/vehicles', name: 'Транспортные средства'},
  ]

  handleProfileClick() {
    this.isContextMenuVisible.update((isVisible) => !isVisible);
  }

  handleProfileMenuSelect(option: ContextMenuOption) {
    if(option.id === 'profile') {
      this.router.navigate(['/account/profile']);
    }

    if(option.id === 'favorites') {
      this.router.navigate(['/account/favorites']);
    }

    if(option.id === 'settings') {
      this.router.navigate(['/account/settings/appearance']);
    }

    if(option.id === 'logout') {
      this.authService.logout();
    } 

    this.isContextMenuVisible.set(false);
  }
}
