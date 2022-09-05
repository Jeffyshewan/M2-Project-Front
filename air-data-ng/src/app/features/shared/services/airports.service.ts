import {Injectable} from '@angular/core';
import {Airport} from "../models/airport";

@Injectable({
  providedIn: 'root'
})
export class AirportsService {

  constructor() { }

  getAirportData(): Airport[] {
    const options = {
      method: 'GET',
      headers: {
        'X-Access-Token': '070b386a4ccd4c5595da1617a3aba678',
        'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'c4f23f0c7fmsh782b7e17ed92d8bp1e84c0jsn36a614383de3'
      }
    };
    let airports: Airport[];
    airports = [];

    fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/data/en-GB/airports.json', options)
      .then(response => response.json())
      .then(response => airports = response)
      .catch(err => {
        console.error(err);
        return [];
      });
    return airports;
  }
}
