import { Component, OnInit } from '@angular/core';
import {Country} from "../../features/shared/models/country";
import {Airport} from "../../features/shared/models/airport";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public countries: Country[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.getCountryData();
  }

  getCountryData() {
    const options = {
      method: 'GET',
      headers: {
        'X-Access-Token': '070b386a4ccd4c5595da1617a3aba678',
        'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'c4f23f0c7fmsh782b7e17ed92d8bp1e84c0jsn36a614383de3'
      }
    };

    fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/data/en-GB/countries.json', options)
      .then(response => response.json())
      .then(response => this.countries = response)
      .catch(err => console.error(err));
  }



}
