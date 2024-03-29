import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AiportsComponent} from "./aiports.component";
import {AirportComponent} from "./airport/airport.component";
import {AirportsRoutingModule} from "./airports-routing-module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {AgGridModule} from "ag-grid-angular";
import {MatCardModule} from "@angular/material/card";
import {GoogleMapsModule} from "@angular/google-maps";
import {AirportFlightsComponent} from './airport/airport-flights/airport-flights.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { DestinationInformationsComponent } from './airport/airport-flights/destination-informations/destination-informations.component';

@NgModule({
  declarations: [
    AiportsComponent,
    AirportComponent,
    AirportFlightsComponent,
    DestinationInformationsComponent,
  ],
  imports: [
    CommonModule,
    AirportsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    AgGridModule,
    MatCardModule,
    GoogleMapsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AirportsModule { }
