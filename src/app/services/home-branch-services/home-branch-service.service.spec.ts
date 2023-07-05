import { TestBed } from '@angular/core/testing';

import { HomeBranchServiceService } from './home-branch-service.service';

describe('HomeBranchServiceService', () => {
  let service: HomeBranchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeBranchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
