import {Component, OnInit} from '@angular/core';
import {Companies} from "../../features/shared/models/companies";
import {Router} from "@angular/router";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies: Companies[] | undefined;

  columnDefs = [
    {
      field: 'name_translations.en',
      headerName: 'Name',
    },
    {
      field: 'code',
      headerName: 'Company code',
    },
    {
      field: 'is_lowcost',
      headerName: 'Is the company lowcost ?',
    },
  ];
  public gridOptions = {
    pagination: true,
    paginationPageSize: 15,
    animateRows: true,
    // onCellClicked: (event: any) => this.navigateToCompany(event),
  };
  public rowStyleAgGrid = {
    // cursor: 'pointer',
  }

  public defaultColDef = {
    resizable: true,
    sortable: true,
    floatingFilter: true,
    filter: true,
    suppressMenu: true,
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getCompaniesData();
  }

  getCompaniesData() {
    const options = {
      method: 'GET',
      headers: {
        'X-Access-Token': '070b386a4ccd4c5595da1617a3aba678',
        'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'c4f23f0c7fmsh782b7e17ed92d8bp1e84c0jsn36a614383de3'
      }
    };

    fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/data/en-GB/airlines.json', options)
      .then(response => response.json())
      .then(response => this.companies = response)
      .catch(err => console.error(err));
  }

  navigateToCompany(event: any) {
    if(event.colDef.code !== 'button') {
      console.log(event.data.code);
      this.router.navigate(['/companies/'+ event.data.code], event.data.code);
    }
  }
}
