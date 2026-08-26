import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ACCESS_TOKEN, AUTH_TOKEN, USER_KEY } from "@shared/consts";
import { AuthSecrets, User } from "@shared/domain";
import { CookieService } from "@shared/services/cookie.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  private cookieService = inject(CookieService);

  get isAuthed() {
    return this.cookieService.has(ACCESS_TOKEN);
  }

  async login(authSecrets: AuthSecrets) {
    const authToken = this.cookieService.get(AUTH_TOKEN);
    const authKey = `${authSecrets.nickname}:${authSecrets.password}`;
    const authHash = await this.hashString(authKey);

    if(authHash !== authToken) {
      // Логин или пароль не верен || такого пользователя нет
      return;
    }

    const accessToken = crypto.randomUUID(); // Если все ок, генерим рандомный токен для сессии
    this.cookieService.set(ACCESS_TOKEN, accessToken);
    this.router.navigate(['/']);
  }

  logout() {
    this.cookieService.delete(ACCESS_TOKEN);
    this.router.navigate(['/sign-in']);
  }

  async signUp(user: User, authSecrets: AuthSecrets) {
    const auth = `${authSecrets.nickname}:${authSecrets.password}`;
    const hash = await this.hashString(auth);
    this.cookieService.set(AUTH_TOKEN, hash); // Сеттим токен подтверждающий регистрацию   
    localStorage.setItem(USER_KEY, JSON.stringify({[hash]: user})); // Сеттим пользователя по этому токену
    this.router.navigate(['/sign-in']);
  }

  /**
   * Простой алгоритм шифрования
  */
  private async hashString(text: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
}