import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompaniesComponent} from "./companies.component";
import {AgGridModule} from "ag-grid-angular";
import {CompaniesRoutingModuleModule} from "./companies-routing-module.module";
import {CompanyComponent} from "./company/company.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CompaniesComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    CompaniesRoutingModuleModule,
    FormsModule
  ]
})
export class CompaniesModule {
}
