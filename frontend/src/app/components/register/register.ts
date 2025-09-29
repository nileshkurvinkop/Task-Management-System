import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: any; // declare without initializing

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    // Initialize the form after fb is available
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
// Handles the registration process
  register() {
    if (this.registerForm.invalid) return;

// Call the AuthService register method with form values
    this.authService.register(this.registerForm.value).subscribe({
      next: () => alert('Registration Successful'),
      error: () => alert('Registration Failed')
    });
  }
}
