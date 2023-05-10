// registration.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

interface UserRegistration {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  errors: any;
  
  constructor(private http: HttpClient,private router: Router,private authService: AuthService) {}

  submitRegistrationForm(registrationData: UserRegistration) {
    this.authService.register(registrationData).subscribe(
      response => {
        console.log('Registration successful:', response);
        this.router.navigate(['/login']);
      },
      error => {
        if (error.status === 422) {
          this.errors = error.error.errors;
        } else {
          console.log('Registration failed:', error);
        }}
    );
  }
}
