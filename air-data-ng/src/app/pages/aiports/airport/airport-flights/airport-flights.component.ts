import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Routes} from "../../../../features/shared/models/routes";

@Component({
  selector: 'app-airport-flights',
  templateUrl: './airport-flights.component.html',
  styleUrls: ['./airport-flights.component.scss']
})
export class AirportFlightsComponent implements OnInit {

  public gridOptions = {
    pagination: true,
    paginationPageSize: 15,
    animateRows: true,
    onCellClicked: (event: any) => this.navigateToRoute(event),
  };
  public rowStyleAgGrid = {
    cursor: 'pointer',
  }

  public defaultColDef = {
    resizable: true,
    sortable: true,
    floatingFilter: true,
    filter: true,
    suppressMenu: true,
  };

  public routes: Routes[] | undefined;

  columnDefs = [
    {
      field: 'destination.iata',
      headerName: 'Airport code (IATA code)',
    },
    {
      field: 'destination.icao',
      headerName: 'Airport code (ICAO code)',
    },
    {
      field: 'destination.municipalityName',
      headerName: 'City name',
    },
    {
      field: 'destination.shortName',
      headerName: 'Shortname',
    },
    {
      field: 'destination.countryCode',
      headerName: 'Country code',
    },
    {
      field: 'operators.length',
      headerName: 'Number of company oparating',
    },
  ];

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getAirportRoutes(this.route.snapshot.params['code']);
  }

  getAirportRoutes(icao: string) {
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

  private navigateToRoute(event: any) {

  }
}
