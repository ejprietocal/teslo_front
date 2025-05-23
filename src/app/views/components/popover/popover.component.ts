// popover.component.ts
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-popover',
  imports: [
    CommonModule
  ],

  template: `
    <div
      class=" popover-content text-sm text-gray-500  bg-white border border-gray-200 rounded-sm shadow-xs  dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 p-3"
      [style.top.px]="position.top"
      [style.left.px]="position.left"
      [style.position]="'fixed'"
      [style.display]="visible ? 'block' : 'none'"
      (mouseenter)="onMouseEnter()"
      (mouseleave)="onMouseLeave()"
       [innerText]="text"
    >
    </div>
  `,
  styles: [`
    .popover-content {
      z-index: 9999;
      min-width: 150px;
      pointer-events: auto;
      transition: opacity 0.5s ease-in-out;
    }
  `],
  encapsulation: ViewEncapsulation.None,
})
export class PopoverComponent {
  visible = false;
  text = '';
  position = { top: 0, left: 0 , right: 0};
  dataId: string | null = null;

  private hideTimeout?: any;
  private keepVisible = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  showAtElement(element: HTMLElement, text: string) {
    this.text = text;
    const rect = element.getBoundingClientRect();

    // Ajusta la posición (ejemplo: abajo y centrado del botón)
    this.position.top = rect.top + window.scrollY - this.el.nativeElement.offsetHeight - 50;
    this.position.left = rect.left + window.scrollX + rect.width / 10;

    this.visible = true;
  }

  hide() {
    this.visible = false;
    this.keepVisible = false;
     this.text = '';
  }

  onMouseEnter() {
    this.keepVisible = true;
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }
  }

  onMouseLeave() {
    this.keepVisible = false;
    // Oculta con un pequeño delay para que el usuario pueda moverse entre el botón y el popover sin que desaparezca
    this.hideTimeout = setTimeout(() => {
      if (!this.keepVisible) this.hide();
    }, 200);
  }
}
