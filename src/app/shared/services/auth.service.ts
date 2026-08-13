import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "@shared/cookie";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  private cookieService = inject(CookieService);

  get isAuthed() {
    return this.cookieService.has('token');
  }

  login() {
    const accessToken = crypto.randomUUID();
    this.cookieService.set('token', accessToken);
    this.router.navigate(['/']);
  }

  logout() {
    this.cookieService.delete('token');
    this.router.navigate(['/auth']);
  }
}