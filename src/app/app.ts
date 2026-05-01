import { Component, signal } from '@angular/core';
import { Users } from './users/users';
import { Login } from "./login/login";

@Component({
  selector: 'app-root',
  imports: [Login, Users],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  cadastrandoUsuario: boolean = false;
  protected readonly title = signal('CoreOne-Frontend');

  setCadastrarUsuarioTrue(){
    this.cadastrandoUsuario = true;
  }
}
