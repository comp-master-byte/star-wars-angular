import { inject, Injectable } from "@angular/core";
import { CREATED_USERS_KEY } from "@shared/consts";
import { AppearanceService } from "@shared/services";

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public appearanceService = inject(AppearanceService);

  appInit() {
    this.initUsersDB();
    this.appearanceService.init();
  }

  /**
   * Таблица с созданными пользователями
  */
  private initUsersDB() {
    const createdUsers = localStorage.getItem(CREATED_USERS_KEY);
    if(!createdUsers) {
      localStorage.setItem(CREATED_USERS_KEY, JSON.stringify({}));
    }
  }
}