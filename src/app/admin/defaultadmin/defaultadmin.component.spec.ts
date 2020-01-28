import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultadminComponent } from './defaultadmin.component';

describe('DefaultadminComponent', () => {
  let component: DefaultadminComponent;
  let fixture: ComponentFixture<DefaultadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
