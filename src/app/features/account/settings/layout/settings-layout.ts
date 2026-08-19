import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar, SidebarOption } from '@shared/components';

@Component({
  selector: 'app-settings-layout',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './settings-layout.html',
  styleUrl: './settings-layout.css',
})
export class SettingsLayout {
  public sidebarOptions: SidebarOption[] = [
    { id: 'appearance', label: 'Внешний вид', href: '/account/settings/appearance' },
    { id: 'security', label: 'Безопасность', href: '/account/settings/security' },
  ]
}
