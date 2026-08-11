import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stub-page',
  imports: [],
  templateUrl: './stub-page.html',
  styleUrl: './stub-page.css',
})
export class StubPage {
  eyebrow = input('Скоро будет готово');
  title = input('Эта страница ещё в гиперпространстве');
  description = input('Архивы подготавливаются. Вернитесь позже, чтобы исследовать этот раздел галактики.');
}
