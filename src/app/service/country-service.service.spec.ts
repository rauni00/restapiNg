import { TestBed } from "@angular/core/testing";
import { CountryService } from "./country-service.service";

// import { CountryServiceService } from "./country-service.service";

describe("CounteryServicService", () => {
  let service: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
