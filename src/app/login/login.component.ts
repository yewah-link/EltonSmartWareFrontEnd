import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  hidePassword = true;

  @Output() loginClicked = new EventEmitter<void>(); // Define an output event

  constructor (
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void {
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    this.authService.login(email, password).subscribe(
      (res) => {
        this.snackBar.open('Login Success', 'Ok', { duration: 5000 });
        this.router.navigate(['/dashboard']); 
      },
      (error) => {
        console.error('Login Error:', error);
        this.snackBar.open('Login Error', 'Ok', { duration: 5000 });
      }
    );
  }

  onLoginClicked(): void {
    this.loginClicked.emit(); // Emit the event when the login button is clicked
  }
}
