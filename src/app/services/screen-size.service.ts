// screen-size.service.ts
import { Injectable, signal } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  screenHeight = signal<number>(window.innerHeight);
  constructor() {
    window.addEventListener('resize', this.updateScreenHeight.bind(this));
  }
  private updateScreenHeight() {
    this.screenHeight.set(window.innerHeight);
  }
}
