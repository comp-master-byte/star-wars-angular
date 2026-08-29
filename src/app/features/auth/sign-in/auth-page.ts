import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@shared/services';
import { RouterLink } from "@angular/router";
import { AuthTemplate } from '../components';
import { AuthSecrets } from '@shared/domain';

@Component({
  selector: 'app-auth-page',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, AuthTemplate],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css',
})
export class AuthPage {
  private authService = inject(AuthService);
  private isSubmitted = false;
  private hackCounter = 0;
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

    if(!this.authForm.value.login||!this.authForm.value.password) {
      return;
    }

    const authSecrets: AuthSecrets = {
      nickname: this.authForm.value.login,
      password: this.authForm.value.password,
    }

    this.authService.login(authSecrets);
  }

  authHack() {
    this.hackCounter += 1;

    if(this.hackCounter === 5) {
      // Нужно доработать в связи с новой авторизацией
      // this.authService.login();
    }
  }
}
