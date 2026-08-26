import { Component, inject } from '@angular/core';
import { AuthTemplate } from '../components';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@shared/services';
import { RouterLink } from '@angular/router';
import { AuthSecrets, User } from '@shared/domain';

@Component({
  selector: 'app-sign-up-page',
  imports: [ReactiveFormsModule, AuthTemplate, RouterLink],
  templateUrl: './sign-up-page.html',
  styleUrl: './sign-up-page.css',
})
export class SignUpPage {
  private authService = inject(AuthService);
  public isSubmitted = false;
  public signUpForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
    date: new FormControl(''),
    nickname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  get firstNameControl() {
    return this.signUpForm.controls.firstName;
  }
  get firstNameError() {
    if(this.firstNameControl.touched || this.isSubmitted) {
      const isRequired = this.firstNameControl.errors?.required;
      return isRequired;
    }

    return false;
  }

  get lastNameControl() {
    return this.signUpForm.controls.lastName;
  }

  get dateControl() {
    return this.signUpForm.controls.date;
  }

  get nicknameControl() {
    return this.signUpForm.controls.nickname;
  }
  get nicknameError() {
    if(this.nicknameControl.touched || this.isSubmitted) {
      const isRequired = this.nicknameControl.errors?.required;
      const isMinLength = this.nicknameControl.errors?.minlength;
  
      return isMinLength||isRequired;
    }

    return false;
  }

  get passwordControl() {
    return this.signUpForm.controls.password;
  }
  get passwordError() {
    if(this.passwordControl.touched || this.isSubmitted) {
      const isRequired = this.passwordControl.errors?.required;
      const isMinLength = this.passwordControl.errors?.minlength;
  
      return isMinLength||isRequired;
    }
    
    return false;
  }

  onSubmit() {
    this.isSubmitted = true;

    if(!this.signUpForm.valid) {
      return;
    }
    
    const authSecrets: AuthSecrets = {
      nickname: this.signUpForm.value.nickname!,
      password: this.signUpForm.value.password!,
    };

    const user: User = {
      id: crypto.randomUUID(),
      date: this.signUpForm.value.date||'',
      firstName: this.signUpForm.value.firstName||'',
      lastName: this.signUpForm.value.lastName||'',
      nickName: this.signUpForm.value.nickname||'',
    } 

    this.authService.signUp(user, authSecrets)
  }
}
