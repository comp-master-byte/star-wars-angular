import { PlanetsDict } from "../../../shared/domain/planet";
import { PLANETS_FULL_DATA_DICT } from "./planets-full-dto";
import { PlanetServerType } from "./planets-server-types";

function parseSwapiNumber(value: string | number | null | undefined): number | null {
  if (value === null || value === undefined || value === 'unknown' || value === 'n/a') {
    return null;
  }

  const num = typeof value === 'number' ? value : Number(value);
  return Number.isNaN(num) ? null : num;
}

export function planetsResponseMapping(response: PlanetServerType): PlanetsDict {
  const result: PlanetsDict = {};

  for (let i = 0; i < response.results.length; i++) {
    const properties = response.results[i].properties;
    result[properties.name] = {
      name: properties.name,
      rotationPeriod: parseSwapiNumber(properties.rotation_period),
      orbitalPeriod: parseSwapiNumber(properties.orbital_period),
      diameter: parseSwapiNumber(properties.diameter),
      climate: properties.climate,
      gravity: properties.gravity,
      terrain: properties.terrain,
      surfaceWater: parseSwapiNumber(properties.surface_water),
      population: parseSwapiNumber(properties.population),
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
