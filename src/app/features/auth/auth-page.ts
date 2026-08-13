import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieController } from '@shared/cookie';

@Component({
  selector: 'app-auth-page',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css',
})
export class AuthPage {
  private router = inject(Router);
  private cookieController = inject(CookieController);
  private isSubmitted = false;
  public authForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  get loginControl(): FormControl {
    return this.authForm.controls.login;
  }
  get loginControlHasErrors() {
    if(this.loginControl.touched || this.isSubmitted) {
      const isRequired = this.loginControl.errors?.required;
      const isMinLength = this.loginControl.errors?.minlength;
  
      return isMinLength||isRequired;
    }

    return false;
  }

  get passwordControl(): FormControl {
    return this.authForm.controls.password;
  }
  get passwordControlHasErrors() {
    if(this.passwordControl.touched || this.isSubmitted) {
      const isRequired = this.passwordControl.errors?.required;
      const isMinLength = this.passwordControl.errors?.minlength;
  
      return isMinLength||isRequired;
    }
    
    return false;
  }

  get disabledSubmitBtn() {
    if(!this.isSubmitted) {
      return false;
    }

    return this.loginControlHasErrors || this.passwordControlHasErrors;
  }

  onSubmit() {
    this.isSubmitted = true;

    if(this.authForm.invalid) {
      return;
    }

    const accessToken = crypto.randomUUID();
    this.cookieController.set('token', accessToken);
    this.router.navigate(['/']);
  }
}
