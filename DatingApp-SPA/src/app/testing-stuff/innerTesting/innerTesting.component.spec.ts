/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InnerTestingComponent } from './innerTesting.component';

describe('InnerTestingComponent', () => {
  let component: InnerTestingComponent;
  let fixture: ComponentFixture<InnerTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
