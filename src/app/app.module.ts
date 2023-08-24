import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { CountryContinentColorPipe } from './country-continent-color.pipe';
import { ListCountryComponent } from './list-country/list-country.component';
import { DetailCountryComponent } from './detail-country/detail-country.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    CountryContinentColorPipe,
    ListCountryComponent,
    DetailCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Utilisez ici votre fichier de configuration des routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

