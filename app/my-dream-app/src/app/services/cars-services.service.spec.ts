import { TestBed } from '@angular/core/testing';

import { CarsServicesService } from './cars-services.service';

describe('CarsServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarsServicesService = TestBed.get(CarsServicesService);
    expect(service).toBeTruthy();
  });
});
