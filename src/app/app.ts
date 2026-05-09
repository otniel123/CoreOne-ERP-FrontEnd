import { Component, signal } from '@angular/core';
import { Users } from './users/users';
import { Login } from "./login/login";
import { Register } from './register/register';

@Component({
  selector: 'app-root',
  imports: [Login, Users, Register],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  currentPage: string = 'login';
  protected readonly title = signal('CoreOne-Frontend');

  setCurrentPageLogin(){
    this.currentPage = 'login';
  }

  setCurrentPageRegister(){
    this.currentPage = 'register';
  }

}
