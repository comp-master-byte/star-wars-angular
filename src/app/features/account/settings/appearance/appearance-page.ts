import { UpperCasePipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AppearanceService } from '@shared/services';

@Component({
  selector: 'app-appearance-page',
  imports: [UpperCasePipe, NgClass],
  templateUrl: './appearance-page.html',
  styleUrl: './appearance-page.css',
})
export class AppearancePage {
  public appearanceService = inject(AppearanceService);
}
