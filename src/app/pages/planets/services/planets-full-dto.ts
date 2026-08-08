export type PlanetExtraData = {
  img: string;
}

// Словарь вручную собранных данных, которых не хватает в АПИ для полноценной работы
export const PLANETS_FULL_DATA_DICT: Record<string, PlanetExtraData> = {
  'Tatooine': {
    img: '/assets/planets/tatooine.jpg',
  },
  'Alderaan': {
    img: '/assets/planets/alderaan.png',
  },
  'Yavin IV': {
    img: '/assets/planets/yavin-4.webp',
  },
  'Hoth': {
    img: '/assets/planets/hoth.webp',
  },
}
