export type CharactersExtraData = {
  img?: string;
  color?: string;
  video?: string;
  designation: string;
}

// Словарь вручную собранных данных, которых не хватает в АПИ для полноценной работы
export const CHARACTERS_FULL_DATA_DICT: Record<string, CharactersExtraData> = {
  '1': {
    img: '/assets/characters/luke.jpg',
    designation: 'Jedi Knight',
    color: 'green',
  },
  '2': {
    img: '/assets/characters/c-3po.jpeg',
    designation: 'Protocol Droid',
  },
  '3': {
    img: '/assets/characters/r2-d2.png',
    designation: 'Astromech Droid',
  },
  '4': {
    img: '/assets/characters/dart-vader.webp',
    video: '/video/vader.mp4',
    designation: 'Sith Lord',
    color: 'red'
  },
  '5': {
    img: '/assets/characters/leia.webp',
    designation: 'Rebel Leader',
  },
  '6': {
    img: '/assets/characters/owen.jpeg',
    designation: 'Moisture Farmer',
  },
  '7': {
    img: '/assets/characters/beru.jpg',
    designation: 'Moisture Farmer',
  },
  '8': {
    img: '/assets/characters/r5-d4.jpeg',
    designation: 'Astromech Droid',
  },
  '9': {
    img: '/assets/characters/biggs.jpeg',
    designation: 'Rebel Pilot',
  },
  '10': {
    img: '/assets/characters/obi-wan.jpg',
    designation: 'Jedi Master',
    color: 'blue',
  },
  '11': {
    img: '/assets/characters/anakin.jpeg',
    designation: 'Jedi Knight',
    color: 'blue',
  },
  '12': {
    img: '/assets/characters/tarkin.png',
    designation: 'Imperial Governor',
  },
  '13': {
    img: '/assets/characters/chewbacca.webp',
    designation: 'Wookiee Warrior',
  },
  '14': {
    img: '/assets/characters/han-solo.jpeg',
    designation: 'Smuggler',
  },
  '15': {
    img: '/assets/characters/greedo.webp',
    designation: 'Bounty Hunter',
  },
  '16': {
    img: '/assets/characters/jabba.webp',
    designation: 'Crime Lord',
  },
  '18': {
    designation: 'Rebel Pilot',
  },
  '19': {
    designation: 'Rebel Pilot',
  },
  '20': {
    img: '/assets/characters/yoda.jpeg',
    designation: 'Jedi Grand Master',
  },
  '21': {
    img: '/assets/characters/palpatine.png',
    designation: 'Sith Lord',
  },
  '22': {
    img: '/assets/characters/boba-fet.jpeg',
    designation: 'Sith Lord',
  },
}