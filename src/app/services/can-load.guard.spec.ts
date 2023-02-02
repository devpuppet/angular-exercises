import { TestBed } from '@angular/core/testing';

import { CanLoadGuard } from './can-load.guard';

describe('CanLoadService', () => {
  let service: CanLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanLoadGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
