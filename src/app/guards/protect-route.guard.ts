import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

// Definimos el guard como una función
export const protectRouteGuard: CanActivateFn = (route, state) => {
  // Usamos la inyección de dependencias para acceder al AuthService
  const authService = inject(AuthService);
  const router = inject(Router);


  // Verificamos si el usuario está autenticado
  const isAuthenticated = authService.isAuthenticatedSignal();
  const userRoles = authService.userRolesSignal();
  // Si el usuario no está autenticado, lo redirigimos al login
  if (!isAuthenticated) {
    router.navigate(['/']); // Redirige a la página de login
    return false; // Impide el acceso a la ruta
  }

  // Si está autenticado, permitimos el acceso a la ruta
  return true;
};
