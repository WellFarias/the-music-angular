import { TestBed } from '@angular/core/testing';

import { InstrumentServiceService } from './instrument-service.service';

describe('InstrumentServiceService', () => {
  let service: InstrumentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstrumentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
