import { TestBed } from '@angular/core/testing';

import { MoodleServiceService } from './moodle-service.service';

describe('MoodleServiceService', () => {
  let service: MoodleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoodleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
