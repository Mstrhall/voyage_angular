import { Component } from '@angular/core';
import {debounceTime, distinct, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {Router} from "@angular/router";
import {Country} from "../country";
import {CountryService} from "../country.service";

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css']
})
export class SearchCountryComponent {
  searchTerms= new Subject<string>();
  country$: Observable<Country[]>;
  constructor(private router: Router, private countryService: CountryService) {
  }
  ngOnInit():void{
    this.country$=this.searchTerms.pipe(
    debounceTime(300),
      distinctUntilChanged(),
      switchMap((term)=> this.countryService.searchCountryList(term))
      )

  }
  search(term: string){
    this.searchTerms.next(term);

  }
  goTodetail(country: Country){
    const link=['/country',country.id];
    this.router.navigate(link);
  }

  protected readonly Country = Country;
}


