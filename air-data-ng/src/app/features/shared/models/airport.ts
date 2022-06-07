export interface Airport {
  city_code?: string,
  country_code?: string,
  name_translations?:{
    en: string,
  }
  time_zone?: string,
  flightable?: boolean,
  coordinates?:{
    lat: number,
    lon: number,
  }
  name?: string,
  code?: string,
  iata_type?: string,
}
