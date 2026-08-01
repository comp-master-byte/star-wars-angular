export type CharactersExtraData = {
  name: string;
  img: string;
  status: string;
}

// Словарь вручную собранных данных, которых не хватает в АПИ для полноценной работы
export const CHARACTERS_FULL_DATA_DICT: Record<string, CharactersExtraData> = {
  '1': {
    name: 'Luke Skywalker',
    img: '/assets/characters/luke.jpg',
    status: 'Jedi Knight'
  },
  '2': {
    name: 'C-3PO',
    img: '/assets/characters/c-3PO.jpg',
    status: 'droid'
  },
  '3': {
    name: 'R2-D2',
    img: '/assets/characters/R2-D2.png',
    status: 'droid'
  },
  '4': {
    name: 'Dart Vader',
    img: '/assets/characters/dart-vader.jpg',
    status: 'Sith Lord'
  },
  '10': {
    name: 'Obi-Wan Kenobi',
    img: '/assets/characters/obi-wan.jpg',
    status: 'Jedi Knight'
  },
  '11': {
    name: 'Anakin Skywalker',
    img: '/assets/characters/anakin-1.jpg',
    status: 'Jedi Knight'
  },
}