import { CharacterUrlId } from "./character";
import { PlanetUrlId } from "./planet";
import { SpeciesUrlId } from "./species";
import { StarshipUrlId } from "./starship";
import { VehicleUrlId } from "./vehicle";

export type FilmUrlId = string;
export type FilmDict = Record<string, FilmType>;
export type FilmType = {
  title: string;
  episodeId: string;
  openingCrawl: string;
  director: string;
  producer: string;
  releaseDate: string;
  characters: CharacterUrlId[],
  planets: PlanetUrlId[],
  starships: StarshipUrlId[],
  vehicles: VehicleUrlId[],
  species: SpeciesUrlId[],
  created: string;
  edited: string;
  url: FilmUrlId;
  img?: string;
}