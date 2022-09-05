import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airport-flights',
  templateUrl: './airport-flights.component.html',
  styleUrls: ['./airport-flights.component.scss']
})
export class AirportFlightsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getAirportRoutes();
  }

  getAirportRoutes() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c4f23f0c7fmsh782b7e17ed92d8bp1e84c0jsn36a614383de3',
        'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
      }
    };

    fetch('https://aerodatabox.p.rapidapi.com/airports/icao/LFQQ/stats/routes/daily', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
}
