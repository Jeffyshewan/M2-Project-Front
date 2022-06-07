import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AirportComponent} from "./airport/airport.component";
import {AiportsComponent} from "./aiports.component";

const routes: Routes = [
  {
    path: ':code',
    component: AirportComponent,
  },
  {
    path: '',
    component: AiportsComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AirportsRoutingModule {
}
