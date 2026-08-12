import { PlanetsDict, PlanetType } from "../../../shared/domain/planet";
import { PLANETS_FULL_DATA_DICT } from "./planets-server-data";
import { PlanetServerResult, PlanetServerType, PlanetSingleServerResponse } from "./planets-server-types";

function createPlanetSignature(result: PlanetServerResult): PlanetType {
  const property = result.properties;
  
  return {
    id: result.uid,
    name: property.name,
    rotationPeriod: property.rotation_period,
    orbitalPeriod: property.orbital_period,
    diameter: property.diameter,
    climate: property.climate,
    gravity: property.gravity,
    terrain: property.terrain,
    surfaceWater: property.surface_water,
    population: property.population,
    residents: property.residents ?? [],
    films: property.films ?? [],
    created: property.created,
    edited: property.edited,
    url: property.url,
    ...PLANETS_FULL_DATA_DICT[property.name],
  }
}

export function planetsResponseMapping(response: PlanetServerType): PlanetsDict {
  const mapped: PlanetsDict = {};

  for (let i = 0; i < response.results.length; i++) {
    const results = response.results[i];
    const property = response.results[i].properties;
    mapped[results.uid] = createPlanetSignature(results);
  }

  return mapped;
}

export function planetSinglePropertyMapping(response: PlanetSingleServerResponse): PlanetType {
  const result = response.result;
  return createPlanetSignature(result);
} 