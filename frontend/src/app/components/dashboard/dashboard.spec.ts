import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard';

describe('Dashboard', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent] // Import the standalone component
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);// Create component instance
    component = fixture.componentInstance; // Get component reference
    fixture.detectChanges();// Trigger initial data binding
  });
  
// Test case to check if the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
