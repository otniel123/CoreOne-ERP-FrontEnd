import { Component, EventEmitter, Output } from '@angular/core';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email ?: string;
  password ?: string;
  errorMessage : string = "";
  loggedIn : boolean = false;
  loggedUserEmail ?: string;
  recentActions = ['Login realizado', 'Perfil acessado', 'Dashboard aberto'];

  @Output() cadastrarUsuario = new EventEmitter()

  onInputEmail(event: Event){
    const input = event.target as HTMLInputElement;
    this.email = input.value;
  }

  onInputPassword(event: Event){
    const input = event.target as HTMLInputElement;
    this.password = input.value;
  }

  onLogin(){
    return;
  }

  onClickLoginButton(event: Event){
    event.preventDefault();
    if(!this.email?.trim() || !this.password?.trim()){
      this.errorMessage = "Preencha todos os campos!";
      return;
    }
    if(this.email?.includes(" ")){
      this.errorMessage = "Email não pode conter espaços em branco";
      return;
    }
    if(!this.email?.includes("@")){
      this.errorMessage = "Inclua um '@' no endereço de email";
      return;
    }
    let afterAtSign = this.email.indexOf("@") + 1;
    if(this.email.charAt(afterAtSign) == ""){
      this.errorMessage = "Insira uma parte depois de '@'"
      return;
    }
    let domain = this.email.slice(afterAtSign);
    if(!domain.includes(".com")){
      this.errorMessage = "Insira um dominio válido. Ex: exemplo@gmail.com"
      return;
    }
    this.loggedIn = true;
    this.loggedUserEmail = this.email;
    this.errorMessage = "";
    return;
  }

  clickBotaoCadastrarUsuario(){
    this.cadastrarUsuario.emit(true);
  }

  onLogout(){
    this.email = "";
    this.password = "";
    this.loggedIn = false;
    this.loggedUserEmail = ""
  }

  get getLoggedIn(){
    return this.loggedIn;
  }
}
