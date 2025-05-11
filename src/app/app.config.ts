import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha-2';
import { environment } from '@environments/environment';


export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(RecaptchaV3Module),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
      })
    ),
    provideHttpClient(),
    provideAnimationsAsync(),
    // provideClientHydration(withEventReplay()),
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.CLAVE_SITIO_WEB_RECAPTCHA}
  ],
};
