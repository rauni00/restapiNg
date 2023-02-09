import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CountryService } from "./service/country-service.service";
import { CountriesComponentComponent } from "./countries-component/countries-component.component";
@NgModule({
  declarations: [AppComponent, CountriesComponentComponent],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CountryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
