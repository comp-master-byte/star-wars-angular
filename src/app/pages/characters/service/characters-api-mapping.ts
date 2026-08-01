import { CharacterType } from "../../../shared";
import { CharacterResultServer } from "./characters-server-types";

export function characterPropertiesMapping(response: CharacterResultServer[]): Record<string, CharacterType> {
  const result: Record<string, CharacterType> = {};

  for(let i = 0; i < response.length; i++) {
    result[response[i]._id] = {
      name: response[i].properties.name,
      height: response[i].properties.height,
      mass: response[i].properties.mass,
      hairColor: response[i].properties.hair_color,
      skinColor: response[i].properties.skin_color,
      eyeColor: response[i].properties.eye_color,
      birthYear: response[i].properties.birth_year,
      gender: response[i].properties.gender,
      homeworld: response[i].properties.homeworld,
      films: response[i].properties.films || [],
      species: response[i].properties.species || [],
      vehicles: response[i].properties.vehicles || [],
      starships: response[i].properties.starships || [],
      created: response[i].properties.created,
      edited: response[i].properties.edited,
      url: response[i].properties.url,
    }
  }

  return result;
}