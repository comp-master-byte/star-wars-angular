import { FilmUrlId } from "./film";
import { PlanetUrlId } from "./planet";
import { SpeciesUrlId } from "./species";
import { StarshipUrlId } from "./starship";
import { VehicleUrlId } from "./vehicle";

export type CharacterUrlId = string;
export type CharacterDict = Record<string, CharacterType>;
export type CharacterType = {
  id: string;
  name: string;
  mass: string;
  img?: string;
  height: string;
  color?: string;
  eyeColor: string;
  hairColor: string;
  skinColor: string;
  birthYear: string;
  films: FilmUrlId[];
  homeworld: PlanetUrlId;
  species: SpeciesUrlId[];
  vehicles: VehicleUrlId[];
  starships: StarshipUrlId[];
  created: string;
  edited: string;
  url: CharacterUrlId;
  designation?: string;
  gender: 'male' | 'female' | 'unknown';
}