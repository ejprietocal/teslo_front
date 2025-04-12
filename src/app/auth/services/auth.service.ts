import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Signal que indica si el usuario está autenticado
  isAuthenticatedSignal = signal<boolean>(this.hasToken());

  // Signal que guarda los roles del usuario, inicialmente los roles del token
  userRolesSignal = signal<string[]>(this.getRolesFromToken());

  constructor(private router: Router) {
    this.initializeRoles();
  }

  // Obtener el token desde el localStorage
  private getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  // Verificar si el usuario tiene token (lo que indica que está autenticado)
  private hasToken(): boolean {
    return !!this.getToken();
  }

  // Obtener los roles del token JWT
  private getRolesFromToken(): string[] {
    const token = this.getToken();
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decodificamos el JWT
      return decodedToken.roles || [];
    }
    return [];
  }

  // Método para actualizar el estado de autenticación y roles
  setAuthState(isAuthenticated: boolean): void {
    this.isAuthenticatedSignal.set(isAuthenticated);

    // Si el estado de autenticación cambia a verdadero (autenticado),
    // también asignamos los roles directamente desde el token
    if (isAuthenticated) {
      const roles = this.getRolesFromToken();
      this.userRolesSignal.set(roles);
      console.log('Roles del usuario asignados automáticamente:', roles); // Imprime los roles
    } else {
      // Si el usuario no está autenticado, limpiamos los roles
      this.userRolesSignal.set([]);
    }
  }

  // Método para verificar el token y asignar roles de forma automática
  private autoAssignRolesFromToken(): void {
    const roles = this.getRolesFromToken();
    if (roles.length > 0) {
      this.userRolesSignal.set(roles);
      console.log('Roles del usuario asignados automáticamente desde el token:', this.userRolesSignal());
    }
  }

  // Si el token está disponible al cargar el servicio, asignamos roles automáticamente
  initializeRoles(): void {
    if (this.hasToken()) {
      this.autoAssignRolesFromToken();
    }
  }
}
