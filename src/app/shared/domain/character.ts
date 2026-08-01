import { FilmUrlId } from "./film";
import { PlanetUrlId } from "./planet";
import { SpeciesUrlId } from "./species";
import { StarshipUrlId } from "./starship";
import { VehicleUrlId } from "./vehicle";

export type CharacterUrlId = string;

export type CharacterType = {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: 'male' | 'female';
  homeworld: PlanetUrlId;
  films: FilmUrlId[];
  species: SpeciesUrlId[];
  vehicles: VehicleUrlId[];
  starships: StarshipUrlId[];
  created: string;
  edited: string;
  url: CharacterUrlId;
}