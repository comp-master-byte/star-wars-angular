import { CharacterUrlId } from "./character";
import { PlanetUrlId } from "./planet";
import { SpeciesUrlId } from "./species";
import { StarshipUrlId } from "./starship";
import { VehicleUrlId } from "./vehicle";

export type FilmUrlId = string;
export type EpisodesDict = Record<string, EpisodeType>;
export type EpisodeType = {
  img: string;
  color: string;
  title: string;
  edited: string;
  url: FilmUrlId;
  created: string;
  director: string;
  producer: string;
  episodeId: string;
  releaseDate: string;
  openingCrawl: string;
  planets: PlanetUrlId[];
  species: SpeciesUrlId[];
  vehicles: VehicleUrlId[];
  starships: StarshipUrlId[];
  characters: CharacterUrlId[];
}