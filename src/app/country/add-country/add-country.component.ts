import { Component, OnInit } from '@angular/core';
import { FormBuilder, , Validators } from '@angular/forms';
import { Country } from '../country'; // Assurez-vous d'importer correctement le modèle Country
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  country: Country;

  constructor() {}

  ngOnInit() {

    this.country = new Country();
  }


  onSubmit(): void {
    if (this.countryForm.valid) {
      this.country = this.countryForm.value;
      this.countryForm
      console.log(this.country);
      this.countryForm.reset();
    }
  }
}
