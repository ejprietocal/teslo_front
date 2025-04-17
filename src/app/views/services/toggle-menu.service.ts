import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleMenuService {

  readonly sidebarHidden = signal(true);

}
