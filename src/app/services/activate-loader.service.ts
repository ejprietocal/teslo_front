import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivateLoaderService {

  public loader = signal<boolean>(false);
  public loaderInternal = signal<boolean>(false);

  constructor() {
    console.log(this.loader, this.loaderInternal);
  }

  activateSignal() {
    this.loader.set(true);
  }

  deactivateSignal() {
    this.loader.set(false);

  }

  activateInternalSignal() {
    this.loaderInternal.set(true);

  }

  deactivateInternalSignal() {

    this.loaderInternal.set(false);
  }
}
