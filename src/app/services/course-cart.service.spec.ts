import { TestBed } from '@angular/core/testing';

import { CourseCartService } from './course-cart.service';

describe('CourseCartService', () => {
  let service: CourseCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
