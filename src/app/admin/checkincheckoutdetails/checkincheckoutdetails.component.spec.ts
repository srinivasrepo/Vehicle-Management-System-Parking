import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckincheckoutdetailsComponent } from './checkincheckoutdetails.component';

describe('CheckincheckoutdetailsComponent', () => {
  let component: CheckincheckoutdetailsComponent;
  let fixture: ComponentFixture<CheckincheckoutdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckincheckoutdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckincheckoutdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
