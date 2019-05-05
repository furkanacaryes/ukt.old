import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KKLabComponent } from './kklab.component';

describe('KKLabComponent', () => {
  let component: KKLabComponent;
  let fixture: ComponentFixture<KKLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KKLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KKLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
