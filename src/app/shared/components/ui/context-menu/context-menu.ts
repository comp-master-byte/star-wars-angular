import { Component, ElementRef, HostListener, inject, input, output } from '@angular/core';

export type ContextMenuOption = {
  id: string;
  label: string;
  variant: 'default' | 'danger';
}

@Component({
  selector: 'app-context-menu',
  imports: [],
  templateUrl: './context-menu.html',
  styleUrl: './context-menu.css',
})
export class ContextMenu {
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  public options = input<ContextMenuOption[]>([]);
  public isVisible = input(false);
  public onMenuOptionSelect = output<ContextMenuOption>();
  public clickOutside = output<void>();

  handleSelectOption(option: ContextMenuOption) {
    this.onMenuOptionSelect.emit(option);
  }

  @HostListener('document:pointerdown', ['$event'])
  handleClickOutside(event: PointerEvent) {
    /**
     * Если меню сейчас закрыто, вообще не нужно проверять clickOutside.
     * Без этой проверки при каждом клике по странице код будет выполняться, хотя меню скрыто и закрывать нечего.
    */
    if(!this.isVisible()) {
      return;
    }

    const target = event.target;

    if (!(target instanceof Node)) {
      return;
    }

    const isClickInside = this.elementRef.nativeElement.contains(target)
    if(!isClickInside) {
      this.clickOutside.emit();
    }
  }
}
