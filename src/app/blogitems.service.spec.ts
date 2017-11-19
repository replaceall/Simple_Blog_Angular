import { TestBed, inject } from '@angular/core/testing';

import { BlogitemsService } from './blogitems.service';

describe('BlogitemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogitemsService]
    });
  });

  it('should be created', inject([BlogitemsService], (service: BlogitemsService) => {
    expect(service).toBeTruthy();
  }));
});
