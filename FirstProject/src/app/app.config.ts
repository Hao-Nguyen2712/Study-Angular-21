import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';

// PrimeNG Imports
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),         // ← Kích hoạt Animation cho PrimeNG (Lazy load)
    providePrimeNG({                  // ← Khởi tạo cấu hình PrimeNG
      theme: {
        preset: Aura,                 // Sử dụng giao diện Aura hiện đại
        options: {
          darkModeSelector: '.dark-mode' // Tùy chọn chuyển đổi Dark mode bằng class .dark-mode
        }
      }
    })
  ]
};
