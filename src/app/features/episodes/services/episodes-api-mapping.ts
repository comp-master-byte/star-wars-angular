import { EpisodeType } from "@shared/domain";
import { EPISODES_FULL_DATA_DICT } from "./episodes-server-data";
import { EpisodeSingleServerResponse, EpisodesServerResponse, EpisodesServerResultProperty } from "./episodes-server-types";

function createEpisodeSignature(property: EpisodesServerResultProperty): EpisodeType {
  return {
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
    ...EPISODES_FULL_DATA_DICT[property.episode_id],
  }
}

export function episodesResponseMapping(response: EpisodesServerResponse): Record<string, EpisodeType> {
  const result: Record<string, EpisodeType> = {};

  for (let i = 0; i < response.result.length; i++) {
    const property = response.result[i].properties;
    result[property.episode_id] = createEpisodeSignature(property);
  }

  return result;
}

export function episodeSingleResponseMapping(response: EpisodeSingleServerResponse): EpisodeType {
  const property = response.result.properties;
  return createEpisodeSignature(property);
}