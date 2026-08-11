import { PlanetsDict } from "../../../shared/domain/planet";
import { PLANETS_FULL_DATA_DICT } from "./planets-server-data";
import { PlanetServerType } from "./planets-server-types";

export function planetsResponseMapping(response: PlanetServerType): PlanetsDict {
  const result: PlanetsDict = {};

  for (let i = 0; i < response.results.length; i++) {
    const properties = response.results[i].properties;
    result[properties.name] = {
      name: properties.name,
      rotationPeriod: properties.rotation_period,
      orbitalPeriod: properties.orbital_period,
      diameter: properties.diameter,
      climate: properties.climate,
      gravity: properties.gravity,
      terrain: properties.terrain,
      surfaceWater: properties.surface_water,
      population: properties.population,
      residents: properties.residents ?? [],
      films: properties.films ?? [],
      created: properties.created,
      edited: properties.edited,
      url: properties.url,
      ...PLANETS_FULL_DATA_DICT[properties.name],
    };
  }

  return result;
}
