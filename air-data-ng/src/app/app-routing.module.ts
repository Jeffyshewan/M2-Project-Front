import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./features/login/login.component";
import {LogoutComponent} from "./features/logout/logout.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {NotFoundComponent} from "./features/not-found/not-found.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'airports',
    loadChildren: () => import('./pages/aiports/airports.module').then(m => m.AirportsModule),
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
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy',
  }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
