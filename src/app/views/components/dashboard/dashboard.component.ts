import { Component, inject } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { TopMenuComponent } from "../top-menu/top-menu.component";
import { ToggleMenuService } from '../../services/toggle-menu.service';
import { RefreshTokenService } from '../../services/refresh-token.service';

@Component({
  selector: 'app-dashboard',
  imports: [
    ContentComponent,
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private readonly refreshToken = inject(RefreshTokenService);

  constructor() { }

  ngOnInit(): void {
    this.refreshToken.checkToken();
  }

}
