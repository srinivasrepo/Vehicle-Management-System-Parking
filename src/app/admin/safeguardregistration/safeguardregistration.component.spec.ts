import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeguardregistrationComponent } from './safeguardregistration.component';

describe('SafeguardregistrationComponent', () => {
  let component: SafeguardregistrationComponent;
  let fixture: ComponentFixture<SafeguardregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeguardregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeguardregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
