import { TestBed } from '@angular/core/testing';

import { OurProjectsBranchService } from './our-projects-branch.service';

describe('OurProjectsBranchService', () => {
  let service: OurProjectsBranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurProjectsBranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
