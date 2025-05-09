import { Routes } from '@angular/router';
import { protectRouteGuard } from './guards/protect-route.guard';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./views/components/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate:[protectRouteGuard],
  },
  {
    path: 'register',
    loadComponent: () => import('./views/components/register/register.component').then(m => m.RegisterComponent),
  },
  {
    path: 'retrieve-account',
    loadComponent: () => import('./views/components/retrieve-account/retrieve-account.component').then(m => m.RetrieveAccountComponent),
  },
  {
    path: 'api/auth/reset-password/:token',
    loadComponent: () => import('./views/components/reset-password/reset-password.component').then(m => m.ResetPasswordComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./views/components/not-found/not-found.component').then(m => m.NotFoundComponent)
  },
];
