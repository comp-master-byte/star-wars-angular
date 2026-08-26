import { UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AppearanceService } from '@shared/services';
import { Checkbox } from '@shared/components/ui';

@Component({
  selector: 'app-appearance-page',
  imports: [UpperCasePipe, Checkbox],
  templateUrl: './appearance-page.html',
  styleUrl: './appearance-page.css',
})
export class AppearancePage {
  public appearanceService = inject(AppearanceService);
}
