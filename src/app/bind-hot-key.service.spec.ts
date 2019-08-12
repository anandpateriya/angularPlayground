import { TestBed } from '@angular/core/testing';

import { BindHotKeyService } from './bind-hot-key.service';

describe('BindHotKeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BindHotKeyService = TestBed.get(BindHotKeyService);
    expect(service).toBeTruthy();
  });
});
