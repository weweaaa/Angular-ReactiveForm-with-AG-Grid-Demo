import { TestBed } from '@angular/core/testing';

import { GridPartOfFormService } from './grid-part-of-form.service';

describe('GridPartOfFormService', () => {
  let service: GridPartOfFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridPartOfFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
