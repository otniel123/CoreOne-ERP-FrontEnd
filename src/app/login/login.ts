import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email ?: string;
  password ?: string;

  onInputEmail(event: Event){
    const input = event.target as HTMLInputElement;
    this.email = input.value;
  }

  onInputPassword(event: Event){
    const input = event.target as HTMLInputElement;
    this.password = input.value;
  }

  onLogin(event: Event){
    event.preventDefault();
    alert(this.email + " " +this.password);
  }
}
