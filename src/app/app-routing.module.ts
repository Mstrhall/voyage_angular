import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCountryComponent } from "./country/list-country/list-country.component";
import { DetailCountryComponent } from "./country/detail-country/detail-country.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [

  { path: '', redirectTo: '/country', pathMatch: 'full' },
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

