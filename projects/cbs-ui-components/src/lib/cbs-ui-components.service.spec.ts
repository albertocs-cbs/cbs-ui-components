import { TestBed } from '@angular/core/testing';

import { CbsUiComponentsService } from './cbs-ui-components.service';

describe('CbsUiComponentsService', () => {
  let service: CbsUiComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CbsUiComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
