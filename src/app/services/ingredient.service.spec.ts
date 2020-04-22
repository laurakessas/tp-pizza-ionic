import { TestBed } from '@angular/core/testing';

import { IngredientService } from './ingredient.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IngredientService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: IngredientService = TestBed.get(IngredientService);
    expect(service).toBeTruthy();
  });
});
