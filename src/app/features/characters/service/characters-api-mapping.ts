import { CharacterDict, CharacterType } from "../../../shared";
import { CHARACTERS_FULL_DATA_DICT } from "./characters-server-data";
import { CharacterResultServer, CharacterSingleServerResponse } from "./characters-server-types";

export function characterPropertiesMapping(response: CharacterResultServer[]): Record<string, CharacterType> {
  const result: CharacterDict = {};

  for(let i = 0; i < response.length; i++) {
    result[response[i].uid] = {
      id: response[i].uid,
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
      ...CHARACTERS_FULL_DATA_DICT[response[i].uid]
    }
  }

  return result;
}

export function characterSinglePropertyMapping(response: CharacterSingleServerResponse): CharacterType {
  const property = response.result.properties;

  return {
    id: response.result.uid,
    name: property.name,
    height: property.height,
    mass: property.mass,
    hairColor: property.hair_color,
    skinColor: property.skin_color,
    eyeColor: property.eye_color,
    birthYear: property.birth_year,
    gender: property.gender,
    homeworld: property.homeworld,
    films: property.films || [],
    species: property.species || [],
    vehicles: property.vehicles || [],
    starships: property.starships || [],
    created: property.created,
    edited: property.edited,
    url: property.url,
    ...CHARACTERS_FULL_DATA_DICT[response.result.uid],
  };
}