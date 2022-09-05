import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AirportComponent} from "./airport/airport.component";
import {AiportsComponent} from "./aiports.component";
import {AirportFlightsComponent} from "./airport/airport-flights/airport-flights.component";
import {
  DestinationInformationsComponent
} from "./airport/airport-flights/destination-informations/destination-informations.component";

const routes: Routes = [
  {
    path: ':code',
    component: AirportComponent,
  },
  {
    path: ':code/routes',
    component: AirportFlightsComponent,
  },
  {
    path: ':code/routes/:dest/destination',
    component: DestinationInformationsComponent,
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
