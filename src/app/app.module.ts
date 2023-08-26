import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {CountryModule} from "./country/country.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {InMemoryDataService} from "./in-memory-data.service";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    CountryModule,
    AppRoutingModule, // Utilisez ici votre fichier de configuration des routes

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

