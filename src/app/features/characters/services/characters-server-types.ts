export type CharacterServerProperties = {
  created: string;
  edited: string;
  name: string;
  gender: 'male' | 'female';
  skin_color: string;
  hair_color: string;
  height: string;
  eye_color: string;
  mass: string;
  homeworld: string;
  birth_year: string;
  vehicles?: string[];
  starships?: string[];
  species?: string[];
  films?: string[];
  url: string;
};

export type CharacterResultServer = {
  _id: string;
  description: string;
  uid: string;
  properties: CharacterServerProperties;
}

export type CharacterServerResponse = {
  apiVersion: string;
  message: string;
  next: string;
  total_records: number;
  total_pages: number;
  results: CharacterResultServer[];
}

export type CharacterSingleServerResponse = {
  result: CharacterResultServer;
}