import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppearanceService } from '@shared/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  public appearanceService = inject(AppearanceService);

  constructor() {
    this.appearanceService.init();
  }
}
