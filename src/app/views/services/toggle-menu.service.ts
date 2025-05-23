import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleMenuService {
  visible = signal(true);
  floatMenuVisibility = signal(false);

  open() {
    this.visible.set(true);
  }

  close() {
    this.visible.set(false);
  }

  toggle() {
    this.visible.update(v => !v);
    console.log(this.visible())
  }


  toggleFloatMenu() {
    this.floatMenuVisibility.update(v => !v);
  }

}
