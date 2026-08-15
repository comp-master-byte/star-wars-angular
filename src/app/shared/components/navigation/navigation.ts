import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '@shared/services';
import { ContextMenu, ContextMenuOption } from '@shared/ui';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive, ContextMenu],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  public authService = inject(AuthService);
  public isContextMenuVisible = signal(false);
  public contextMenuOptions: ContextMenuOption[] = [
    {id: 'profile', label: 'Профиль', variant: 'default'},
    {id: 'favourite', label: 'Избранное', variant: 'default'},
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
    if(option.id === 'logout') this.authService.logout();
    this.isContextMenuVisible.set(false);
  }
}
