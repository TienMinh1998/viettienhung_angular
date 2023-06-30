import { TestBed } from '@angular/core/testing';

import { AleartService } from './aleart.service';

describe('AleartService', () => {
  let service: AleartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AleartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
