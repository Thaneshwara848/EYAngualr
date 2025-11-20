import { TestBed } from '@angular/core/testing';

import { IntegrationservService } from './integrationserv.service';

describe('IntegrationservService', () => {
  let service: IntegrationservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntegrationservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
