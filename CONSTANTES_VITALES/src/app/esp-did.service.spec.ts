import { TestBed } from '@angular/core/testing';

import { EspDidService } from './esp-did.service';

describe('EspDidService', () => {
  let service: EspDidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspDidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
