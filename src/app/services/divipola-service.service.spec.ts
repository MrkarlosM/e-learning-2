import { TestBed } from '@angular/core/testing';

import { DivipolaServiceService } from './divipola-service.service';

describe('DivipolaServiceService', () => {
  let service: DivipolaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivipolaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
