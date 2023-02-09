import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  constructor(private _http: HttpClient) {}
  api = "https://restcountries.com/v2/all";
  getApi(): Observable<any> {
    return this._http.get(this.api);
  }
  // CurrencyApi = "https://restcountries.com/v3.1/all?fields=currencies";
  // CurrencyApi = "https://restcountries.com/v3.1/currency/currencies";
  // GetCurrency(): Observable<any> {
  //   return this._http.get(this.CurrencyApi);
  // }
}
// //////////////////////////////////////////////////////////////////////////////////////////////
//! danger
// public handleError(error) {
//   console.error("Error is:" + error);
//   return Observable.throw(error || "Internal Server Error");
// }

// return this._http.get(" https://restcountries.com/v3.1/all").pipe(

//   map(
//     (response) => {
//       return response;
//     },
//     (error) => {
//       this.handleError(error);
//     }
//   )
// );
// return this._http.get(" https://restcountries.com/v3.1/all").subscribe(
//   (res) => console.log(res),
//   (error) => {
//     throw error;
//   },
//   () => console.log("finished")
// );

// SUB() {
//   return this._http.get(" https://restcountries.com/v3.1/all").subscribe(
//     (res) => console.log(res[0].capital),
//     (error) => {
//       throw error;
//     },
//     () => console.log("finished")
//   );
// }
