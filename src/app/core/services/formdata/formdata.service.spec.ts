import { TestBed } from '@angular/core/testing';

import { FormdataService } from './formdata.service';

describe('FormdataService', () => {
  let service: FormdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
