import { FilmUrlId } from "./film";
import { PlanetUrlId } from "./planet";
import { SpeciesUrlId } from "./species";
import { StarshipUrlId } from "./starship";
import { VehicleUrlId } from "./vehicle";

export type CharacterUrlId = string;

export type Character = {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
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