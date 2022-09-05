export interface Destination {

  countryCode?: string;
  iata?: string;
  icao?: string;
  location?: {
    lat: number,
    lon: number,
  }
  municipalityName?: string;
  name?: string;
  shortName?: string;
}
