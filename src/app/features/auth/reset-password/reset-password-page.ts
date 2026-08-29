import { Component } from '@angular/core';
import { AuthTemplate } from "../components";
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password-page',
  imports: [AuthTemplate, RouterLink, ReactiveFormsModule],
  templateUrl: './reset-password-page.html',
  styleUrl: './reset-password-page.css',
})
export class ResetPasswordPage {
  public isSubmitted = false;
  public resetPasswordForm = new FormGroup({
    nickname: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    repeatNewPassword: new FormControl('', [Validators.required]),
  })

  get nicknameControl() {
    return this.resetPasswordForm.controls.nickname;
  }
  get nicknameError() {
    if(this.nicknameControl.touched || this.isSubmitted) {
      const isRequired = this.nicknameControl.errors?.required;
      return isRequired;
    }

    return false;
  }

  get newPasswordControl() {
    return this.resetPasswordForm.controls.newPassword;
  }
  get newPasswordError() {
    if(this.newPasswordControl.touched || this.isSubmitted) {
      const isRequired = this.newPasswordControl.errors?.required;
      return isRequired;
    }

    return false;
  }

  get repeatNewPasswordControl() {
    return this.resetPasswordForm.controls.repeatNewPassword;
  }
  get repeatNewPasswordError() {
    if(this.repeatNewPasswordControl.touched || this.isSubmitted) {
      const isRequired = this.repeatNewPasswordControl.errors?.required;
      return isRequired;
    }

    return false;
  }

  get isDisabledSubmitBtn() {
    return this.nicknameError||this.newPasswordError||this.repeatNewPasswordError;
  }
 
  onSubmit() {
    this.isSubmitted = true;
  }
}
