import { CharacterUrlId, FilmUrlId, PlanetUrlId } from "@shared/domain";
import { SpeciesUrlId } from "@shared/domain/species";
import { StarshipUrlId } from "@shared/domain/starship";
import { VehicleUrlId } from "@shared/domain/vehicle";

export type EpisodesServerResultProperty = {
  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: CharacterUrlId[];
  planets: PlanetUrlId[];
  starships: StarshipUrlId[];
  vehicles: VehicleUrlId[];
  species: SpeciesUrlId[];
  created: string;
  edited: string;
  url: FilmUrlId;
}

export type EpisodesServerResult = {
  _id: string;
  __v: number;
  description: string;
  uid: string;
  properties: EpisodesServerResultProperty;
}

export type EpisodesServerResponse = {
  message: string;
  apiVersion: string;
  result: EpisodesServerResult[];
}

export type EpisodeSingleServerResponse = {
  result: EpisodesServerResult;
}