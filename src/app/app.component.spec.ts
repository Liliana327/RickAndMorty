import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';

const ActivatedRouteMock = {
  url: '',
  snapshot: {
    params: { id: '5' },
    queryParams: { overwrite: false },
  },
};


describe('PaginationComponent', () => {
  let component: AppComponent;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AppComponent,
        { provide: ActivatedRoute, useValue: ActivatedRouteMock },

      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
  );


  it('should be created', () => {
    const service: AppComponent = TestBed.inject(AppComponent);
    expect(service).toBeTruthy();
  });


});
