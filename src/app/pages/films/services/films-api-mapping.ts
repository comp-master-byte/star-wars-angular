import { FilmType } from "../../../shared/domain/film";
import { FilmsServerResponse } from "./films-server-types";

export function filmsResponseMapping(response: FilmsServerResponse[]): Record<string, FilmType> {
  const result: Record<string, FilmType> = {};

  for(let i = 0; i < response.length; i++) {
    result[response[i].episode_id] = {
      episodeId: response[i].episode_id,
      openingCrawl: response[i].opening_crawl,
      releaseDate: response[i].release_date,
      ...response[i],
    }
  }

  return result;
}
