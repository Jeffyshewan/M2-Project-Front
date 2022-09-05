import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Routes} from "../../../features/shared/models/routes";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {

  inputCode?: string;
  inputLimit?: number;
  code: string = this.route.snapshot.params['code'];

  routes: Routes[] | undefined;

  columnDefs = [
    {
      field: 'data',
    },
  ];

  public gridOptions = {
    pagination: true,
    paginationPageSize: 15,
    animateRows: true,
    // onCellClicked: (event: any) => this.navigateToCompany(event),
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

  constructor(private route: ActivatedRoute) {
  }


  getCompanyRoutes() {

    console.log(this.inputCode, this.inputLimit);
    const options = {
      method: 'GET',
      headers: {
        'X-Access-Token': '070b386a4ccd4c5595da1617a3aba678',
        'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'c4f23f0c7fmsh782b7e17ed92d8bp1e84c0jsn36a614383de3'
      }
    };

    fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/airline-directions?airline_code=' + this.inputCode + '&limit=' + this.inputLimit, options)
      .then(response => response.json())
      .then(response => this.routes = response)
      .catch(err => console.error(err));
  }
}
