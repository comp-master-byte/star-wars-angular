import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-render-list-item',
  imports: [],
  templateUrl: './render-list-item.html',
  styleUrl: './render-list-item.css',
})
export class RenderListItem {
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
