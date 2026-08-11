import { CharacterUrlId } from "../../../shared";
import { FilmUrlId } from "../../../shared/domain/film";
import { PlanetUrlId } from "../../../shared/domain/planet";
import { SpeciesUrlId } from "../../../shared/domain/species";
import { StarshipUrlId } from "../../../shared/domain/starship";
import { VehicleUrlId } from "../../../shared/domain/vehicle";

export type FilmsServerResultProperty = {
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

export type FilmsServerResult = {
  _id: string;
  __v: number;
  description: string;
  uid: string;
  properties: FilmsServerResultProperty;
}

export type FilmsServerResponse = {
  message: string;
  apiVersion: string;
  result: FilmsServerResult[];
}