import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AiportsComponent} from "./aiports.component";
import {AirportComponent} from "./airport/airport.component";
import {AirportsRoutingModule} from "./airports-routing-module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {AgGridModule} from "ag-grid-angular";
import {MatCardModule} from "@angular/material/card";
import {GoogleMapsModule} from "@angular/google-maps";
import { AirportFlightsComponent } from './airport/airport-flights/airport-flights.component';

@NgModule({
  declarations: [
    AiportsComponent,
    AirportComponent,
    AirportFlightsComponent,
  ],
  imports: [
    CommonModule,
    AirportsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    AgGridModule,
    MatCardModule,
    GoogleMapsModule
  ]
})
export class AirportsModule { }
