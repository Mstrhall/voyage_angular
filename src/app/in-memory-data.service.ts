import { Injectable } from '@angular/core';
import { InMemoryDbService} from "angular-in-memory-web-api";

import {Countrys} from "./country/mock-country-list";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

 createDb() {
   const country=Countrys;
   return {country};
 }

}
