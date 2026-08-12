import { CharacterUrlId, FilmUrlId, PlanetUrlId } from "@shared/domain";

type SwapiNumericField = string;

export type PlanetServerProperty = {
  name: string;
  rotation_period: SwapiNumericField;
  orbital_period: SwapiNumericField;
  diameter: SwapiNumericField;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: SwapiNumericField;
  population: SwapiNumericField;
  residents: CharacterUrlId[];
  films: FilmUrlId[];
  created: string;
  edited: string;
  url: PlanetUrlId;
}

export type PlanetServerResult = {
  _id: string;
  uid: string;
  description: string;
  properties: PlanetServerProperty;
}

export type PlanetServerType = {
  next: string;
  message: string;
  apiVersion: string;
  total_pages: number;
  total_records: number;
  results: PlanetServerResult[];
}

export type PlanetSingleServerResponse = {
  result: PlanetServerResult;
}