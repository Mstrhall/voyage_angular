import { Component } from '@angular/core';
import {Countrys} from "../mock-country-list";
import {Router} from "@angular/router";
import {Country} from "../country";
import {CountryService} from "../country.service";

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',

})
export class ListCountryComponent {
  countryList =Countrys;

  constructor(
    private route:Router,
    private countryService: CountryService)
  {}
  ngOnInit(){
    this.countryList=this.countryService.getcountrylist();
  }
  goToCountry(country:Country){
    this.route.navigate(['/country',country.id]);
  }
}
