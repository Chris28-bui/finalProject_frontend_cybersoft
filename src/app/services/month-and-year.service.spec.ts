import { TestBed } from '@angular/core/testing';

import { MonthAndYearService } from './month-and-year.service';

describe('MonthAndYearService', () => {
  let service: MonthAndYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthAndYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
