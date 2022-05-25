import { TestBed } from '@angular/core/testing';

import { AoeHTTPService } from './aoe-http.service';

describe('AoeHTTPService', () => {
  let service: AoeHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AoeHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
