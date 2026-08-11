import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-server-error',
  imports: [],
  templateUrl: './server-error.html',
  styleUrl: './server-error.css',
})
export class ServerError {
  eyebrow = input('Ошибка сервера');
  title = input('Архивы временно недоступны');
  description = input('Не удалось получить данные. Проверьте соединение или попробуйте повторить запрос позже.');
  code = input<string | number | null>(null);
  showRetry = input(true);

  retry = output<void>();
}
