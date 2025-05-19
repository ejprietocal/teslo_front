import { TestBed } from '@angular/core/testing';

import { CreateVariantsService } from './create-variants.service';

describe('CreateVariantsService', () => {
  let service: CreateVariantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateVariantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
