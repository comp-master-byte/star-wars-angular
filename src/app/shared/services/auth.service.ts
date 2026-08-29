import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ACCESS_TOKEN, CREATED_USERS_KEY, CURRENT_AUTHED_USER } from "@shared/consts";
import { AuthSecrets, CreatedUser, CreatedUsers, User, UserResetPassword } from "@shared/domain";
import { CookieService } from "./cookie.service";
import { NotificationsService } from "./notifications.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  private notificationsService = inject(NotificationsService);
  private cookieService = inject(CookieService);

  get isAuthed() {
    const sessionToken = this.cookieService.get(ACCESS_TOKEN);
    const sessionUser: CreatedUser = JSON.parse(localStorage.getItem(CURRENT_AUTHED_USER) as string);
    
    if(!sessionToken||!sessionUser) {
      return false;
    }

    const existedUsersDB: CreatedUsers = JSON.parse(localStorage.getItem(CREATED_USERS_KEY) as string); 
    const currentUserDB = existedUsersDB[sessionUser?.nickname];

    if(!currentUserDB) {
      return false;
    }

    if(sessionUser.authHash !== currentUserDB.authHash) {
      return false;
    }

    return true;
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
    localStorage.setItem(CURRENT_AUTHED_USER, JSON.stringify(currentUser));
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem(CURRENT_AUTHED_USER);
    this.cookieService.delete(ACCESS_TOKEN);
    return this.router.navigate(['/sign-in']);
  }

  async signUp(user: User, authSecrets: AuthSecrets) {
    const auth = `${authSecrets.nickname}:${authSecrets.password}`;
    const hash = await this.hashString(auth);
    const createdUsers: CreatedUsers = JSON.parse(localStorage.getItem(CREATED_USERS_KEY) as string);

    if(createdUsers[user.nickname]) {
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
      [user.nickname]: createdUser,
    }
    
    localStorage.setItem(CREATED_USERS_KEY, JSON.stringify(updatedUsers)); // Сеттим пользователя по этому токену
    this.router.navigate(['/sign-in']);
  }

  async resetPassword(resetPasswordCreds: UserResetPassword) {
    const createdUsers: CreatedUsers = JSON.parse(localStorage.getItem(CREATED_USERS_KEY) as string);

    if(!createdUsers[resetPasswordCreds.nickname]) {
      this.notificationsService.invokeNotification('Пользователь с таким никнеймом не найден');
      return;
    }

    const auth = `${resetPasswordCreds.nickname}:${resetPasswordCreds.newPassword}`;
    const hash = await this.hashString(auth);

    createdUsers[resetPasswordCreds.nickname] = {
      ...createdUsers[resetPasswordCreds.nickname],
      authHash: hash,
    }

    localStorage.setItem(CREATED_USERS_KEY, JSON.stringify(createdUsers));
    this.notificationsService.invokeNotification('Пароль успешно изменен!');
    this.router.navigate(['/sign-in']);
  }

  /**
   * Простой алгоритм хэширования
  */
  private async hashString(text: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
}