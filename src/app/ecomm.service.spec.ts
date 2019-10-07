import { TestBed } from '@angular/core/testing';

import { EcommService } from './ecomm.service';

describe('EcommService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EcommService = TestBed.get(EcommService);
    expect(service).toBeTruthy();
  });
});
