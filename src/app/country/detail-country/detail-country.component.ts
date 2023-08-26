import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Countrys } from "../mock-country-list";
import { Country } from "../country";
import {CountryService} from "../country.service";

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.css']
})
export class DetailCountryComponent implements OnInit {
  countryList: Country[] = Countrys;
  country: Country | undefined;

  constructor(private router: ActivatedRoute, private route: Router ,private countryService:CountryService) {
    // Initialize your countryList if needed
  }

  goToCountryList() {
    // Use the router to navigate back to the previous page
    this.route.navigate(['/country']); // Replace 'country' with the actual route
  }


  ngOnInit() {
    const countryId: string | null = this.router.snapshot.paramMap.get('id');
    if (countryId) {
      // Assuming your countryList is populated with data
      this.countryService.getCountryById(+countryId).subscribe(country=>this.country=country);
    }
  }
}

