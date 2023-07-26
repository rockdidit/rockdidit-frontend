import { TestBed } from '@angular/core/testing';

import { ContentInfoService } from './content-info.service';

describe('ContentInfoService', () => {
  let service: ContentInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
