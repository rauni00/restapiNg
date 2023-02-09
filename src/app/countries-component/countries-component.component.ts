import { Component, Input, OnInit } from "@angular/core";
import { CountryService } from "../service/country-service.service";
import { map, catchError, tap } from "rxjs/operators";

@Component({
  selector: "app-countries-component",
  templateUrl: "./countries-component.component.html",
  styleUrls: ["./countries-component.component.css"],
})
export class CountriesComponentComponent implements OnInit {
  data: any;
  currencyData: any;
  constructor(private ApiService: CountryService) {}
  ngOnInit() {
    this.ApiService.getApi().subscribe((res) => {
      this.data = res;
      console.log(res);
    });
    // this.Currency();
  }
  // Currency() {
  //   this.ApiService.GetCurrency().subscribe((result) => {
  //     this.currencyData = result;
  //     console.log(result);
  //   });
  // }
}
// ///////////////////////////////////////////////////////////////////////////////////////////////////
// !danger>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// public getCountry(): any {
//   return this._http.get(" https://restcountries.com/v3.1/all").subscribe(
//     (res) =>
// (this.data = res),
//       console.log(res),
//     (error) => {
//       throw error;
//     },
//     () => console.log("finished")
//   );
// }

// gettingServiceData() {
//   console.log(this.data);
// }
// res: any[] = [];
// countries: any[] = [];
// SUB() {
// return this._http.get(" https://restcountries.com/v3.1/all").subscribe(
//   (res) => (this.data = res),

// console.log(res),

//   (error) => {
//     throw error;
//   },
//   () => console.log("finished")
// );
// }

// this._service.getCountry();
// console.log(this._service.getCountry());

// this._service.getCountry().pipe(
//   map(
//     (response) => {
//       return response;
//     },
//     (error) => {
//       this._service.handleError(error);
//     }
//   )
// );
// this._service.getCountry().pipe(
//   map(
//     (response) => {
//       return response;
//     },
//     (error) => {
//       this._service.handleError(error);
//     }
//   )
// );

// console.log(this._service.getCountry());

// this._service.getCountry().subscribe((res) => {
//   this.data = res;
// }),
//   (error) => {
//     console.log(error);
//   };
// console.log(this.SUB());
