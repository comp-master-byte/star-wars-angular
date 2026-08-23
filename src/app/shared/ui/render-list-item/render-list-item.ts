import { Component, inject, input, output } from '@angular/core';
import { AppearanceService } from '@shared/services';

@Component({
  selector: 'app-render-list-item',
  imports: [],
  templateUrl: './render-list-item.html',
  styleUrl: './render-list-item.css',
})
export class RenderListItem {
  public appearanceService = inject(AppearanceService);
  public title = input('');
  public subtitle = input('');
  public accentColor = input('');
  public image = input('');
  public imagePlaceholder = input('');
  public onRenderItemClick = output();

  handleRenderItemClick() {
    this.onRenderItemClick.emit();
  }
}
