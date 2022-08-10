import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PaginationComponent } from './pagination.component';

const ActivatedRouteMock = {
  url: '',
  snapshot: {
    params: { id: '5' },
    queryParams: { overwrite: false },
  },
};


describe('PaginationComponent', () => {

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        PaginationComponent,
        { provide: ActivatedRoute, useValue: ActivatedRouteMock },

      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
  );


  it('should be created', () => {
    const service: PaginationComponent = TestBed.inject(PaginationComponent);
    expect(service).toBeTruthy();
  });

  it('validate catch to petition', () => {
    const ficture = TestBed.createComponent(PaginationComponent)
    const app = ficture.componentInstance
    ficture.detectChanges()
    expect(app).toBeTruthy();
  });

  it('validate funtions counterNex', () => {
    const ficture = TestBed.createComponent(PaginationComponent)
    const app = ficture.componentInstance
    app.counterNex()
    app.counterPrev()
    expect(app).toBeDefined();
  });
});
