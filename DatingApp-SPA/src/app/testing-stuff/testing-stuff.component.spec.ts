import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingStuffComponent } from './testing-stuff.component';

describe('TestingStuffComponent', () => {
  let component: TestingStuffComponent;
  let fixture: ComponentFixture<TestingStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
