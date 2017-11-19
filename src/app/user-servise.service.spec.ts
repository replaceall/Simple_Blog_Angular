import { TestBed, inject } from '@angular/core/testing';

import { UserServiseService } from './user-service.service';

describe('UserServiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserServiseService]
    });
  });

  it('should be created', inject([UserServiseService], (service: UserServiseService) => {
    expect(service).toBeTruthy();
  }));
});
