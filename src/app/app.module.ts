import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { CountryContinentColorPipe } from './country-continent-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    CountryContinentColorPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
