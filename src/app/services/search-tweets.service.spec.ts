import { TestBed } from '@angular/core/testing';

import { SearchTweetsService } from './search-tweets.service';

describe('SearchTweetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchTweetsService = TestBed.get(SearchTweetsService);
    expect(service).toBeTruthy();
  });
});
