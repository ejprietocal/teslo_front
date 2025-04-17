import { Component, inject } from '@angular/core';
import { ToggleMenuService } from '../../services/toggle-menu.service';
import { TopMenuComponent } from '../top-menu/top-menu.component';

@Component({
  selector: 'app-content',
  imports: [
    TopMenuComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  private readonly toggleMenuService = inject(ToggleMenuService);

  toggleSidebar() {
    this.toggleMenuService.sidebarHidden.update((value) => !value);
  }
}
