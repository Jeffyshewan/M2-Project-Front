import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CompaniesComponent} from "./companies.component";
import {CompanyComponent} from "./company/company.component";

const routes: Routes = [
  {
    path: '',
    component: CompaniesComponent,
  },
  {
    path: ':code',
    component: CompanyComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesRoutingModuleModule {
}
