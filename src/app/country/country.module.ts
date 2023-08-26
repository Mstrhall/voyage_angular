import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListCountryComponent} from "./list-country/list-country.component";
import {DetailCountryComponent} from "./detail-country/detail-country.component";
import {BorderCardDirective} from "./border-card.directive";
import {CountryContinentColorPipe} from "./country-continent-color.pipe";
import {RouterModule, Routes} from "@angular/router";
import {CountryService} from "./country.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddCountryComponent } from './add-country/add-country.component';


const countryRoute: Routes = [
{ path: 'country', component: ListCountryComponent },
{ path: 'country/:id', component: DetailCountryComponent },]

@NgModule({
  declarations: [
    ListCountryComponent,
    DetailCountryComponent,
    BorderCardDirective,
    CountryContinentColorPipe,
    AddCountryComponent,


  ],
    imports: [
        CommonModule,

        RouterModule.forChild(countryRoute),
        ReactiveFormsModule
    ],
  providers:[
    CountryService
  ]
})
export class CountryModule { }
