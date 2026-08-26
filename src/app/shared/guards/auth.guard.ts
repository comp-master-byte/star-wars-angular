import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { ACCESS_TOKEN } from '@shared/consts';
import { CookieService } from '@shared/services/cookie.service';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const cookieService = inject(CookieService);

  if(!cookieService.get(ACCESS_TOKEN)) {
    return router.createUrlTree(['/sign-in']);
  }

  return true;
};

export const loggedInGuard: CanActivateFn = () => {
  const router = inject(Router);
  const cookieService = inject(CookieService);

  if(cookieService.get(ACCESS_TOKEN)) {
    return router.createUrlTree(['/']);
  }

  return true;
}
