import { Pipe, PipeTransform } from '@angular/core';
import { FilmType } from '../../shared/domain/film';

@Pipe({
  name: 'filterFilms',
})
export class FilmsPipe implements PipeTransform {
  transform(filmsList: FilmType[], searchField: string): FilmType[] {
    const search = searchField.trim().toLowerCase();

    if (!search) {
      return filmsList;
    }
    
    const filteredFilms = filmsList.filter((film) => {
      const searchableText = [
        film.title,
        film.openingCrawl,
        film.releaseDate,
        film.producer,
        film.director,
      ].join(' ').toLowerCase();

      return searchableText.includes(search);
    });

    return filteredFilms;
  }
}
