import { CharacterUrlId } from "../../../shared";
import { FilmUrlId } from "../../../shared/domain/film";
import { PlanetUrlId } from "../../../shared/domain/planet";

type SwapiNumericField = string | number | null | undefined;

export type PlanetServerType = {
  results: {
    properties: {
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
  }[]
}