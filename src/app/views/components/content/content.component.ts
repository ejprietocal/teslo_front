import { Component, inject } from '@angular/core';
import { ToggleMenuService } from '../../services/toggle-menu.service';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  private readonly toggleMenuService = inject(ToggleMenuService);



}
