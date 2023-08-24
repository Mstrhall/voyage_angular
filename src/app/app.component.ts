import { Component, OnInit} from '@angular/core';
import {Countrys} from "./mock-country-list";
import {Country} from "./country";
import {count} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  countryList =Countrys;
  countrySelected :Country|undefined;
  ngOnInit() {
    console.table(this.countryList);

  }

  selectCountry(countryId :string){
    const theCountry: Country|undefined =this.countryList.find(theCountry =>theCountry.id==+countryId);
    if(theCountry){
      console.log(`Vous avez choisi le pays ${theCountry?.name}`);
      this.countrySelected=theCountry;
    }
    else {
      console.log ("Vous avez choisi demander un pays qui n'existe pas" );
      this.countrySelected=theCountry;
    }

  }

  protected readonly count = count;
}
