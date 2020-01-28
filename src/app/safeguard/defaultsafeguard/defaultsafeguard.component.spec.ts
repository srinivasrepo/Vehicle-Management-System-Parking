import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultsafeguardComponent } from './defaultsafeguard.component';

describe('DefaultsafeguardComponent', () => {
  let component: DefaultsafeguardComponent;
  let fixture: ComponentFixture<DefaultsafeguardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultsafeguardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultsafeguardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
