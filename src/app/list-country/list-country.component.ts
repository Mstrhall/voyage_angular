import { Component } from '@angular/core';
import {Countrys} from "../mock-country-list";

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',

})
export class ListCountryComponent {
  countryList =Countrys;
}
