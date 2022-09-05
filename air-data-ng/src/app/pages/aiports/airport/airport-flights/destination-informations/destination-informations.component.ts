import {Component, OnInit} from '@angular/core';
import {AirportData} from "../../../../../features/shared/models/airport-data";
import {Companies} from "../../../../../features/shared/models/companies";
import {ActivatedRoute, Router} from "@angular/router";
import {Routes} from "../../../../../features/shared/models/routes";

@Component({
  selector: 'app-destination-informations',
  templateUrl: './destination-informations.component.html',
  styleUrls: ['./destination-informations.component.scss']
})
export class DestinationInformationsComponent implements OnInit {

  mapOptions: google.maps.MapOptions = {
    center: {lat: 0, lng: 0}
  }
  airport: AirportData | undefined;
  companies_names?: string[];
  public companies: Companies[] | undefined;

  public routes: Routes[] | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getDestinationInformations(this.route.snapshot.params['dest']);
    this.getAirlines(this.route.snapshot.params['code']);
    this.filterAirline(this.route.snapshot.params['code']);
  }

  getDestinationInformations(iata: string) {
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
      center: {lat: this.airport?.latitude ? this.airport.latitude : 0, lng: this.airport?.longitude ? this.airport.longitude: 0},
    }
  }

  getAirlines(icao: string) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c4f23f0c7fmsh782b7e17ed92d8bp1e84c0jsn36a614383de3',
        'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
      }
    };

    fetch('https://aerodatabox.p.rapidapi.com/airports/icao/'+ icao +'/stats/routes/daily', options)
      .then(response => response.json())
      .then(response => this.routes = response.routes)
      .catch(err => console.error(err));
  }

  filterAirline(icao: string) {
    this.routes?.filter(route => {
      if (route.operators) {
        this.companies?.push(route.operators);
      }
    });
  }
}
