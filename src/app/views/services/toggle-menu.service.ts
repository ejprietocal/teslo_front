import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleMenuService {

  // readonly sidebarHidden = signal(true);

  // readonly visible = signal(false);

  visible = signal(false);

  open() {
    this.visible.set(true);
  }

  close() {
    this.visible.set(false);
  }

  toggle() {
    this.visible.update(v => !v);
  }

}
