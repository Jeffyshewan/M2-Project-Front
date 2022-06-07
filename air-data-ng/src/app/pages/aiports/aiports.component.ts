import {Component, OnInit} from '@angular/core';
import {Airport} from "../../features/shared/models/airport";
import {Router} from "@angular/router";

@Component({
  selector: 'app-aiports',
  templateUrl: './aiports.component.html',
  styleUrls: ['./aiports.component.scss']
})
export class AiportsComponent implements OnInit {

  public gridOptions = {
    pagination: true,
    paginationPageSize: 15,
    animateRows: true,
    onCellClicked: (event: any) => this.navigateToAirport(event),
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

  public airports: Airport[] | undefined;

  columnDefs = [
    {
      field: 'code',
    },
    {
      field: 'city_code',
    },
    {
      field: 'country_code',
    },
    {
      field: 'name_translations.en',
    },
    {
      field: 'time_zone',
    },
    {
      field: 'flightable',
    },
    {
      field: 'name',
    },
    {
      field: 'iata_type',
    },
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.getAirportData();
  }

  getAirportData() {
    const options = {
      method: 'GET',
      headers: {
        'X-Access-Token': '070b386a4ccd4c5595da1617a3aba678',
        'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'c4f23f0c7fmsh782b7e17ed92d8bp1e84c0jsn36a614383de3'
      }
    };

    fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/data/en-GB/airports.json', options)
      .then(response => response.json())
      .then(response => this.airports = response)
      .catch(err => console.error(err));
  }

  navigateToAirport(event: any) {
    if(event.colDef.code !== 'button') {
      console.log(event.data.code);
      this.router.navigate(['/airports/'+ event.data.code], event.data.code);
    }
  }
}
