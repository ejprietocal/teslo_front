import { TestBed } from '@angular/core/testing';

import { CreateItemsService } from './create-items.service';

describe('CreateItemsService', () => {
  let service: CreateItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
