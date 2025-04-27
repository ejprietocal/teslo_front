import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha-2';
import { environment } from '@environments/environment';


export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(RecaptchaV3Module),
    MessageService,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
      })
    ),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideClientHydration(withEventReplay()),
    providePrimeNG({
      theme: {
          preset: Aura,
          options:{
            cssLayer: {
              name: 'primeng',
              order: 'theme, base ,primeng, utilities'
            },
            darkModeSelector: '.dark'
          }
      }
    }),
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.CLAVE_SITIO_WEB_RECAPTCHA}
  ],
};
