import { Component, inject } from '@angular/core';
import { NotificationsService } from '@shared/services';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  public notificationsService = inject(NotificationsService);
}
