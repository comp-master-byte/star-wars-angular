import { Component, input } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

export type SidebarOption = {
  id: string;
  href: string;
  label: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  public options = input<SidebarOption[]>([]);
}
