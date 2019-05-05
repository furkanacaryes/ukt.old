import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ULabComponent } from './ulab.component';

describe('ULabComponent', () => {
  let component: ULabComponent;
  let fixture: ComponentFixture<ULabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ULabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ULabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
