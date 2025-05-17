import { Component, inject, signal } from '@angular/core';
import { TopMenuComponent } from "../top-menu/top-menu.component";
import { RefreshTokenService } from '../../services/refresh-token.service';
import { RightMenuComponent } from '../right-menu/right-menu.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { BreadCumbComponent } from '../bread-cumb/bread-cumb.component';
import { InternalLoaderComponent } from 'src/app/components/internal-loader/internal-loader.component';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    RightMenuComponent,
    TopMenuComponent,
    RouterOutlet,
    BreadCumbComponent,
    InternalLoaderComponent,
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export default class DashboardComponent {
  private readonly router = inject(Router);
  private readonly refreshToken = inject(RefreshTokenService);
  private routerSubscription!: Subscription;
  public loaderService = inject(ActivateLoaderService);

  ngOnInit(): void {
    this.loaderService.deactivateInternalSignal();
    this.refreshToken.checkToken();
    this.routerSubscription = this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.refreshToken.checkToken();
    });
  }
  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }


}
