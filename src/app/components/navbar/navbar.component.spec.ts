import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';


import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from './navbar.component';

const CharacterServiceMock = {
  init: () => {},
};

const ActivatedRouteMock = {
  url: '',
  snapshot: {
    params: { id: '5' },
    queryParams: { overwrite: false },
  },
};


describe('NavbarComponent', () => {
  let component: NavbarComponent;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        NavbarComponent,
        { provide: ActivatedRoute, useValue: ActivatedRouteMock },
        { provide: CharacterService, useValue: CharacterServiceMock },


      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
  );

  it('should be created', () => {
    const service: NavbarComponent = TestBed.inject(NavbarComponent);
    expect(service).toBeTruthy();
  });
});
