import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeguarddashboardComponent } from './safeguarddashboard.component';

describe('SafeguarddashboardComponent', () => {
  let component: SafeguarddashboardComponent;
  let fixture: ComponentFixture<SafeguarddashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeguarddashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeguarddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
