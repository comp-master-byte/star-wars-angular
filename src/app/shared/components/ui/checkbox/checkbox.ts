import { Component, input, model } from '@angular/core';

type CheckboxVariant = 'radio' | 'checkbox';

@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css',
})
export class Checkbox {
  public variant = input<CheckboxVariant>('checkbox');
  public label = input('');
  public isChecked = model(false);

  handleChecked(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.isChecked.set(checked);
  }
}
