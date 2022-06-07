import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {LoginComponent} from './features/login/login.component';
import {LogoutComponent} from './features/logout/logout.component';
import {HomeComponent} from './pages/home/home.component';
import {NavigationComponent} from './features/navigation/navigation.component';
import {FooterComponent} from './features/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {NotFoundComponent} from './features/not-found/not-found.component';
import {AiportsComponent} from './pages/aiports/aiports.component';
import {AgGridModule} from "ag-grid-angular";
import {AirportComponent} from './pages/aiports/airport/airport.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
