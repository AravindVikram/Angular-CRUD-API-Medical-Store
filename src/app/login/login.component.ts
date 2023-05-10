
// login.components.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errors: any;
  

  constructor(private authService: AuthService, private router:Router ) {}

  onSubmit() {
    
    const loginData = {email: this.email,password: this.password,};

    this.authService.login(loginData).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        console.log('Login successful:', response);
        this.router.navigate(['/medicine-list']);
     
      },
      error => {
        if (error.status == 422) { 
          this.errors = error.error.errors; 
        } else {
          console.log('Registration failed:', error);
        }}
    );
  }
}
