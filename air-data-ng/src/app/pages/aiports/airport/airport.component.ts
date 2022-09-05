import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AirportData} from "../../../features/shared/models/airport-data";


@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.scss']
})
export class AirportComponent implements OnInit {

  mapOptions: google.maps.MapOptions = {
    center: {lat: 0, lng: 0}
  }
  airport!: AirportData;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getDataFromAirport(this.route.snapshot.params['code']);
  }

  getDataFromAirport(iata: string) {
    let latitude: number = 25;
    let longitude: number = 25;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'airport-info.p.rapidapi.com',
        'X-RapidAPI-Key': 'c4f23f0c7fmsh782b7e17ed92d8bp1e84c0jsn36a614383de3'
      }
    };

    fetch('https://airport-info.p.rapidapi.com/airport?iata=' + iata, options)
      .then(response => response.json())
      .then(response => this.airport = response)
      .then(response => this.getPosition())
      .catch(err => console.error(err));
  }

  getPosition() {
    this.mapOptions = {
      center: {lat: this.airport.latitude, lng: this.airport.longitude},
    }
    console.log('hoy' + this.mapOptions);
  }

  navigateToSearchPage() {
    this.router.navigate(['airports/' + this.route.snapshot.params['code'] + '/routes']);
  }
}
