export type EpisodesExtraData = {
  img: string;
  color: string;
}

// Словарь вручную собранных данных, которых не хватает в АПИ для полноценной работы
export const EPISODES_FULL_DATA_DICT: Record<string, EpisodesExtraData> = {
  '1': {
    img: '/assets/films/episode-1.webp',
    color: '',
  },
  '2': {
    img: '/assets/films/episode-2.jpg',
    color: '',
  },
  '3': {
    img: '/assets/films/episode-3.jpg',
    color: '',
  },
  '4': {
    img: '/assets/films/episode-4.webp',
    color: '',
  },
  '5': {
    img: '/assets/films/episode-5.jpg',
    color: '',
  },
  '6': {
    img: '/assets/films/episode-6.webp',
    color: '',
  },
}