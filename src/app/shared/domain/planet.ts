import { CharacterUrlId } from "./character";
import { FilmUrlId } from "./film";

export type PlanetUrlId = string;
export type PlanetName = string;
export type PlanetsDict = Record<PlanetName, PlanetType>;

export type PlanetType = {
  name: string;
  img?: string;
  rotationPeriod: string;
  orbitalPeriod: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surfaceWater: string;
  population: string;
  residents: CharacterUrlId[];
  films: FilmUrlId[];
  created: string;
  edited: string;
  url: PlanetUrlId;
}