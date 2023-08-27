import { Injectable } from '@angular/core';
import {Country} from "./country";
import {Countrys} from "./mock-country-list";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, retry, tap} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable()
export class CountryService {
  constructor(private http: HttpClient) {
  }
  getcountrylist(): Observable<Country[]>{
    return this.http.get<Country[]>('api/country').pipe(
      tap((response)=> this.log(response)),
        catchError((error)=>this.handleError(error, []))
    );

  //  return Countrys;
  }
  getCountryById(countryId:number): Observable<Country |undefined>{
    return this.http.get<Country>(`api/country/${countryId}`).pipe(
      tap((response)=> this.log(response)),
      catchError((error)=>this.handleError(error,undefined))
    );

  }
  private log(response: Country[]|Country|undefined ){
    console.table(response);


  }
  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);

  }

  deleteCountryById(countryId: number): Observable<null> {
    return this.http.delete<Country>(`api/country/${countryId}`).pipe(
      tap(response => this.log(response)),
      catchError(error => this.handleError(error, null)) // Pass the error and null value to the handleError function
    );
  }
 addCountry(country :Country):Observable<null>
 {
   const httpOptions={
     headers: new HttpHeaders({'Content-type':'application/json'})
   };
   return this.http.post<Country>('api/country', country,httpOptions).pipe(
     tap(response => this.log(response)),
     catchError(error => this.handleError(error, null)) // Pass the error and null value to the handleError function

   )
 }
 searchCountryList(term:string):Observable<Country[]>{
    return this.http.get<Country[]>(`api/country/?name=${term}`).pipe(
      tap(response => this.log(response)),
      catchError(error => this.handleError(error, []))
    )
 }
 getCountryContinentList():string[]{
    return['Europe,Asia,Africa,South America,North America,Oceania'];
  }
  getCountryResident(countryResident:number):Country|undefined{
    return Countrys.find(Country=>Country.resident==countryResident);
  }

}
