export type FilmExtraData = {
  img: string;
}

// Словарь вручную собранных данных, которых не хватает в АПИ для полноценной работы
export const FILMS_FULL_DATA_DICT: Record<string, FilmExtraData> = {
  '1': {
    img: '/assets/films/episode-1.webp',
  },
  '2': {
    img: '/assets/films/episode-2.jpg',
  },
  '3': {
    img: '/assets/films/episode-3.jpg',
  },
  '4': {
    img: '/assets/films/episode-4.webp',
  },
  '5': {
    img: '/assets/films/episode-5.jpg',
  },
  '6': {
    img: '/assets/films/episode-6.webp',
  },
}