import { Component, input } from '@angular/core';

@Component({
  selector: 'app-empty-search',
  imports: [],
  templateUrl: './empty-search.html',
  styleUrl: './empty-search.css',
})
export class EmptySearch {
  title = input('Ничего не найдено');
  description = input('Попробуйте изменить поисковый запрос или перейти в другой раздел галактики.');
  query = input('');
}
