import { TestBed } from '@angular/core/testing';

import { GetNftsService } from './get-nfts.service';

describe('GetNftsService', () => {
  let service: GetNftsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetNftsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
