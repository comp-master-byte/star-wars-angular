import { Component, inject } from '@angular/core';
import { AuthTemplate } from "../components";
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@shared/services';
import { UserResetPassword } from '@shared/domain';

@Component({
  selector: 'app-reset-password-page',
  imports: [AuthTemplate, RouterLink, ReactiveFormsModule],
  templateUrl: './reset-password-page.html',
  styleUrl: './reset-password-page.css',
})
export class ResetPasswordPage {
  private authService = inject(AuthService);
  public isSubmitted = false;
  public resetPasswordForm = new FormGroup({
    nickname: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    repeatNewPassword: new FormControl('', [Validators.required]),
  })

  get nicknameControl() {
    return this.resetPasswordForm.controls.nickname;
  }
  get nicknameError() {
    if(this.nicknameControl.touched || this.isSubmitted) {
      const isRequired = this.nicknameControl.errors?.required;
      if(isRequired) return 'Заполните ваш никнейм';
    }

    return false;
  }

  get newPasswordControl() {
    return this.resetPasswordForm.controls.newPassword;
  }
  get newPasswordError() {
    if(this.newPasswordControl.touched || this.isSubmitted) {
      const isRequired = this.newPasswordControl.errors?.['required'];
      const minLength = this.newPasswordControl.errors?.['minlength'];
      if(isRequired) return 'Заполните ваш новый пароль';
      if(minLength) return 'Минимальное кол-во символов 8';
    }

    return false;
  }

  get repeatNewPasswordControl() {
    return this.resetPasswordForm.controls.repeatNewPassword;
  }
  get repeatNewPasswordError() {
    if (this.repeatNewPasswordControl.touched || this.isSubmitted) {
      const isRequired = this.repeatNewPasswordControl.errors?.['required'];
      const isMismatch = this.repeatNewPasswordControl.value !== this.newPasswordControl.value;
      if(isRequired) return 'Повторите ваш новый пароль';
      if(isMismatch) return 'Пароль не совпадает';
    }

    return false;
  }

  get isDisabledSubmitBtn() {
    return this.repeatNewPasswordError||this.nicknameError||this.newPasswordError;
  }

  onSubmit() {
    this.isSubmitted = true;

    if(!this.resetPasswordForm.valid) {
      return;
    }

    const credentials: UserResetPassword = {
      nickname: this.resetPasswordForm.value.nickname || '',
      newPassword: this.resetPasswordForm.value.newPassword || '',
      repeatNewPassword: this.resetPasswordForm.value.repeatNewPassword || '',
    }

    this.authService.resetPassword(credentials);
  }
}
