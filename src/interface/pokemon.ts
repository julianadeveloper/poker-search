export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: [
    {
      is_hidden: boolean;
      slot: number;
      ability: {
        name: string;
        url: string;
      };
    }
  ];
  forms: [
    {
      name: string;
      url: string;
    }
  ];
  location_area_encounters: string;
  stats:[Object];

  sprites: {
    front_default: string;
  };
  species: {
    name: string;
    url: string;
  };
}
