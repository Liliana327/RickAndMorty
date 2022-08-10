import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CharacterService } from '..//services/character.service';

const CharacterServiceMock = {
  getUrlApi: () => '',
};

describe('CharacterService', () => {
    let component: CharacterService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          useValue: CharacterServiceMock,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
  );

  it('should be created', () => {
    const service: CharacterService = TestBed.inject(CharacterService);
    expect(service).toBeTruthy();
  });
});