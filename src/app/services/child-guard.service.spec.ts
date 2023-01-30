import { TestBed } from '@angular/core/testing';

import { ChildGuardService } from './child-guard.service';

describe('ChildGuardService', () => {
  let service: ChildGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
