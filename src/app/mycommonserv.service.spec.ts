import { TestBed } from '@angular/core/testing';

import { MycommonservService } from './mycommonserv.service';

describe('MycommonservService', () => {
  let service: MycommonservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycommonservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
