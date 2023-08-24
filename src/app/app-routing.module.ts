import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCountryComponent } from "./list-country/list-country.component";
import { DetailCountryComponent } from "./detail-country/detail-country.component";

const routes: Routes = [
  { path: 'country', component: ListCountryComponent },
  { path: 'country/:id', component: DetailCountryComponent },
  { path: '', redirectTo: '/country', pathMatch: 'full' } // Utilisation de pathMatch: 'full'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

