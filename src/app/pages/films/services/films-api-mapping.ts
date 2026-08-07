import { FilmType } from "../../../shared/domain/film";
import { FILMS_FULL_DATA_DICT } from "./films-full-dto";
import { FilmsServerResponse } from "./films-server-types";

export function filmsResponseMapping(response: FilmsServerResponse[]): Record<string, FilmType> {
  const result: Record<string, FilmType> = {};

  for (let i = 0; i < response.length; i++) {
    result[response[i].episode_id] = {
      title: response[i].title,
      episodeId: response[i].episode_id,
      openingCrawl: response[i].opening_crawl,
      director: response[i].director,
      producer: response[i].producer,
      releaseDate: response[i].release_date,
      characters: response[i].characters,
      planets: response[i].planets,
      starships: response[i].starships,
      vehicles: response[i].vehicles,
      species: response[i].species,
      created: response[i].created,
      edited: response[i].edited,
      url: response[i].url,
      ...FILMS_FULL_DATA_DICT[response[i].episode_id],
    };
  }

  return result;
}
