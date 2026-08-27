import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Notifications } from "@shared/components/core";
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Notifications],
  templateUrl: './app.html',
})
export class App {
  public appService = inject(AppService);

  constructor() {
    this.appService.appInit();
  }
}
