import { TestBed, inject } from '@angular/core/testing';

import { DataFromAaddService } from './data-from-aadd.service';

describe('DataFromAaddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataFromAaddService]
    });
  });

  it('should be created', inject([DataFromAaddService], (service: DataFromAaddService) => {
    expect(service).toBeTruthy();
  }));
});
