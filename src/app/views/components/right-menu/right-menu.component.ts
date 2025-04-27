import { Component, inject } from '@angular/core';
import { ToggleMenuService } from '../../services/toggle-menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-menu',
  imports: [
    CommonModule
  ],
  templateUrl: './right-menu.component.html',
  styleUrl: './right-menu.component.css'
})
export class RightMenuComponent {

  readonly drawerService = inject(ToggleMenuService);


}
