import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, signal, Signal } from '@angular/core';
import { ToggleMenuService } from '../../services/toggle-menu.service';

@Component({
  selector: 'app-side-bar',
  imports: [
    CommonModule,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  readonly toggleMenuService = inject(ToggleMenuService);
  hidden = this.toggleMenuService.sidebarHidden;
}
