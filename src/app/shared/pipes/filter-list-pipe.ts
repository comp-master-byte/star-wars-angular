import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList',
})
export class FilterListPipe implements PipeTransform {
  transform<T extends Record<string, unknown>>(list: T[], query: string, keys: (keyof T)[]): T[] {
    const cleanQuery = query.toLowerCase().trim();

    if(!cleanQuery) {
      return list;
    }

    const filteredList = list.filter((item) => {
      return keys.some((key) => {
        const value = item[key];
        return String(value).toLowerCase().includes(cleanQuery);
      })
    })

    return filteredList;
  }
}
