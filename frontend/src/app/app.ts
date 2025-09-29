
import { Component } from '@angular/core';
import { provideRouter,RouterOutlet } from '@angular/router';
import { LoginComponent } from '../app/components/login/login';
import { RegisterComponent } from '../app/components/register/register';
import { DashboardComponent } from '../app/components/dashboard/dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],

  // Root component template that displays the active routed component
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}// Root component template that displays the active routed component

// Application routing configuration
export const appRoutes = provideRouter([
  
  // Default route: redirect to login page
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
]);