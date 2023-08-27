import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCountryComponent } from "./country/list-country/list-country.component";
import { DetailCountryComponent } from "./country/detail-country/detail-country.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [

  { path: '', redirectTo: '/country', pathMatch: 'full' },
  { path: 'login', component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

