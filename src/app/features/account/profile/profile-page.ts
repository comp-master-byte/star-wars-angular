import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CREATED_USERS_KEY, CURRENT_AUTHED_USER } from '@shared/consts';
import { CreatedUser, CreatedUsers } from '@shared/domain';
import { NotificationsService } from '@shared/services';

@Component({
  selector: 'app-profile-page',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {
  private notificationsService = inject(NotificationsService);
  public userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    nickname: new FormControl('', [Validators.required]),
  })

  constructor() {
    this.init();
    this.userForm.disable()
  }

  init() {
    const currentUser: CreatedUser = JSON.parse(localStorage.getItem(CURRENT_AUTHED_USER) as string);
    this.userForm.controls.date.setValue(currentUser.date);
    this.userForm.controls.lastName.setValue(currentUser.lastName);
    this.userForm.controls.nickname.setValue(currentUser.nickname);
    this.userForm.controls.firstName.setValue(currentUser.firstName);
  }

  toggleEditMode() {
    if(this.userForm.disabled) {
      this.userForm.enable();
    } else {
      this.userForm.disable();
    }
  }

  onSubmit() {
    if(!this.userForm.valid) {
      return;
    }

    const usersDB: CreatedUsers = JSON.parse(localStorage.getItem(CREATED_USERS_KEY) as string);
    const currentUser: CreatedUser = JSON.parse(localStorage.getItem(CURRENT_AUTHED_USER) as string);

    const updatedUser: CreatedUser = {
      id: currentUser.id,
      authHash: currentUser.authHash,
      nickname: this.userForm.value.nickname!,
      firstName: this.userForm.value.firstName!,
      lastName: this.userForm.value.lastName!,
      date: this.userForm.value.date!,
    };

    localStorage.setItem(CURRENT_AUTHED_USER, JSON.stringify(updatedUser));
    
    delete usersDB[currentUser.nickname];
    usersDB[updatedUser.nickname!] = updatedUser;
    localStorage.setItem(CREATED_USERS_KEY, JSON.stringify(usersDB));

    this.userForm.disable();
    this.notificationsService.invokeNotification('Профиль успешно изменен!');
  }
}
