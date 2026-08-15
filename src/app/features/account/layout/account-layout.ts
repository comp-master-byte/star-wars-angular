import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from '@shared/components';

@Component({
  selector: 'app-account-layout',
  imports: [Navigation, RouterOutlet],
  templateUrl: './account-layout.html',
  styleUrl: './account-layout.css',
})
export class AccountLayout {}
