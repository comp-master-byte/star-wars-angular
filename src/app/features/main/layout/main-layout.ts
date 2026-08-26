import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from '@shared/components/core';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Navigation],
  templateUrl: './main-layout.html',
})
export class MainLayout {}
