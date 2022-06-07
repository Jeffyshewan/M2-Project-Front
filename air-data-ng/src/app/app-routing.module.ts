import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./features/login/login.component";
import {LogoutComponent} from "./features/logout/logout.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {NotFoundComponent} from "./features/not-found/not-found.component";
import {AiportsComponent} from "./pages/aiports/aiports.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'airports',
    component: AiportsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
