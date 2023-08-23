import { Component, OnInit} from '@angular/core';
import {Countrys} from "./mock-country-list";
import {Country} from "./country";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  countryList =Countrys;
  ngOnInit() {
    console.table(this.countryList);
    this.selectCountry(this.countryList[1]);
  }

  selectCountry(country:Country){
    console.log(`Vous avez choisi le pays ${country.name}`);
  }
}
