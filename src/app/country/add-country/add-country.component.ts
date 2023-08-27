import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormGroup and Validators
import { Country } from '../country';
import { CountryService } from '../country.service';
import { Router } from '@angular/router'; // Import Router
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  countryForm: FormGroup; // Declare the form group

  constructor(
    private countryService: CountryService,
    private formBuilder: FormBuilder, // Inject FormBuilder
    private router: Router // Inject Router
  ) {}

  ngOnInit() {
    this.countryForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      continent: ['', Validators.required],
      resident: ['', Validators.required],
      picture: ['', Validators.required],
      created: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.countryForm.valid) {
      const countryData = this.countryForm.value; // Get form values
      this.countryService.addCountry(countryData).subscribe(() => this.router.navigate(['/country']));
      console.log(countryData);
      this.countryForm.reset();
    }
  }
}

