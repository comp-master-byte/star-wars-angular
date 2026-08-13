import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { CookieService } from '@shared/cookie';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const cookieService = inject(CookieService);

  if(!cookieService.get('token')) {
    return router.createUrlTree(['/auth']);
  }

  return true;
};

export const loggedInGuard: CanActivateFn = () => {
  const router = inject(Router);
  const cookieService = inject(CookieService);

  if(cookieService.get('token')) {
    return router.createUrlTree(['/']);
  }

  return true;
}
