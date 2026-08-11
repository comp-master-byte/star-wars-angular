import { FilmType } from "../../../shared/domain/film";
import { FILMS_FULL_DATA_DICT } from "./films-server-data";
import { FilmsServerResponse } from "./films-server-types";

export function filmsResponseMapping(response: FilmsServerResponse): Record<string, FilmType> {
  const result: Record<string, FilmType> = {};

  for (let i = 0; i < response.result.length; i++) {
    const property = response.result[i].properties;
    result[property.episode_id] = {
      title: property.title,
      episodeId: property.episode_id,
      openingCrawl: property.opening_crawl,
      director: property.director,
      producer: property.producer,
      releaseDate: property.release_date,
      characters: property.characters,
      planets: property.planets,
      starships: property.starships,
      vehicles: property.vehicles,
      species: property.species,
      created: property.created,
      edited: property.edited,
      url: property.url,
      ...FILMS_FULL_DATA_DICT[property.episode_id],
    };
  }

  return result;
}
