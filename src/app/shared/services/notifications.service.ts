import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  public isVisible = signal(false);
  public message = signal('');

  closeNotification() {
    this.isVisible.set(false);
    this.message.set('')
  }

  invokeNotification(message: string) {
    this.message.set(message);
    this.isVisible.set(true);

    setTimeout(() => {
      if(this.isVisible()) {
        this.closeNotification();
      }
    }, 5000)
  }
}