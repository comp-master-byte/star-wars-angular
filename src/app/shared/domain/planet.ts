import { CharacterUrlId } from "./character";
import { FilmUrlId } from "./film";

export type PlanetUrlId = string;
export type PlanetName = string;
export type PlanetsDict = Record<PlanetName, PlanetType>;

export type PlanetType = {
  name: string;
  img?: string;
  rotationPeriod: number | null;
  orbitalPeriod: number | null;
  diameter: number | null;
  climate: string;
  gravity: string;
  terrain: string;
  surfaceWater: number | null;
  population: number | null;
  residents: CharacterUrlId[];
  films: FilmUrlId[];
  created: string;
  edited: string;
  url: PlanetUrlId;
}