import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { FilmsServerResponse } from './films-server-types';

@Injectable({ providedIn: 'root' })
export class FilmsService {
  http: HttpClient = inject(HttpClient);

  getAll() {
    return this.http.get<FilmsServerResponse[]>('https://swapi.info/api/films')
  }
}
