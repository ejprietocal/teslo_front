import { Component, inject } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ContentComponent } from '../content/content.component';
import { TopMenuComponent } from "../top-menu/top-menu.component";
import { ToggleMenuService } from '../../services/toggle-menu.service';

@Component({
  selector: 'app-dashboard',
  imports: [
    ContentComponent,
    TopMenuComponent,
    SideBarComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private readonly toggleMenuService = inject(ToggleMenuService);

}
