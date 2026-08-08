import { Component, input } from '@angular/core';

@Component({
  selector: 'app-empty-search',
  imports: [],
  templateUrl: './empty-search.html',
  styleUrl: './empty-search.css',
})
export class EmptySearch {
  title = input('Nothing found');
  description = input('Try changing your search query or explore another part of the galaxy.');
  query = input('');
}
