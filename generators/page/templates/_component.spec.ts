import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= capitalizedPluralPageName %>Component } from './<%= pluralPageName %>.component';

describe('<%= capitalizedPluralPageName %>Component', () => {
  let component: <%= capitalizedPluralPageName %>Component;
  let fixture: ComponentFixture<<%= capitalizedPluralPageName %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%= capitalizedPluralPageName %>Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= capitalizedPluralPageName %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
