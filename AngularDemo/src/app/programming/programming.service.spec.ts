import { TestBed, inject } from '@angular/core/testing';

import { ProgrammingService } from './programming.service';

describe('ProgrammingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgrammingService]
    });
  });

  it('should be created', inject([ProgrammingService], (service: ProgrammingService) => {
    expect(service).toBeTruthy();
  }));
});
