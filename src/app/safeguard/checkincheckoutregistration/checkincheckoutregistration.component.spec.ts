import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckincheckoutregistrationComponent } from './checkincheckoutregistration.component';

describe('CheckincheckoutregistrationComponent', () => {
  let component: CheckincheckoutregistrationComponent;
  let fixture: ComponentFixture<CheckincheckoutregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckincheckoutregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckincheckoutregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
