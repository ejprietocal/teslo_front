import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivateLoaderService {

  public loader = signal<boolean>(false);

  activateSignal() {
    this.loader.set(true);
  }

  deactivateSignal() {
    this.loader.set(false);
  }
}
