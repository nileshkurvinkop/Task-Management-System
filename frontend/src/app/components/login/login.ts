import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule,RouterLink, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;  // declare the form without initializing

 constructor(
  private fb: FormBuilder,
  private authService: AuthService,
  private router: Router  // <-- add this
) {}


  ngOnInit() {
    // Initialize the form here, after fb is available
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

login() {
  if (this.loginForm.invalid) return;

  this.authService.login(this.loginForm.value).subscribe({
    next: (res: any) => {
      localStorage.setItem('token', res.token);
      alert('Login Successful');

      // Redirect to dashboard
      this.router.navigate(['/dashboard']);  // <-- change '/dashboard' to your desired route
    },
    error: () => alert('Login Failed')
  });
}
}
