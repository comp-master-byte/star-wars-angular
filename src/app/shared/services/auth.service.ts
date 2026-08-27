import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ACCESS_TOKEN, CREATED_USERS_KEY } from "@shared/consts";
import { AuthSecrets, CreatedUser, CreatedUsers, User } from "@shared/domain";
import { CookieService } from "@shared/services/cookie.service";
import { NotificationsService } from "./notifications.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  private notificationsService = inject(NotificationsService);
  private cookieService = inject(CookieService);

  get isAuthed() {
    return this.cookieService.has(ACCESS_TOKEN);
  }

  async login(authSecrets: AuthSecrets) {
    const createdUsers: CreatedUsers = JSON.parse(localStorage.getItem(CREATED_USERS_KEY) as string);

    if(!createdUsers[authSecrets.nickname]) {
      this.notificationsService.invokeNotification('Пользователя с таким логином не существует');
      return;
    }

    const authKey = `${authSecrets.nickname}:${authSecrets.password}`;
    const authHash = await this.hashString(authKey);
    const currentUser = createdUsers[authSecrets.nickname];

    if(authHash !== currentUser.authHash) {
      this.notificationsService.invokeNotification('Введен неверный пароль')
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
    const createdUsers: CreatedUsers = JSON.parse(localStorage.getItem(CREATED_USERS_KEY) as string);

    if(createdUsers[user.nickName]) {
      // Значит такой пользователь уже существует;
      this.notificationsService.invokeNotification('Пользователь с таким логином уже существует');
      return;
    }

    const createdUser: CreatedUser = {
      ...user,
      authHash: hash,
    }

    const updatedUsers = {
      ...createdUsers,
      [user.nickName]: createdUser,
    }
    
    localStorage.setItem(CREATED_USERS_KEY, JSON.stringify(updatedUsers)); // Сеттим пользователя по этому токену
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