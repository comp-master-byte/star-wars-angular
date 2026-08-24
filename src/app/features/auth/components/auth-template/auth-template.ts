import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-auth-template',
  imports: [],
  templateUrl: './auth-template.html',
  styleUrl: './auth-template.css',
})
export class AuthTemplate {
  public title = input('');
  public subtitle = input('');
  public onHuckAuth = output();

  handleHuckAuthClick() {
    this.onHuckAuth.emit();
  }
}
