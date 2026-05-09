import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RegisterTest } from './register.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
    enteredUsername = '';
    enteredEmail = '';
    enteredPassword = '';
    confirmPassowrd = '';
    errorMessage = ''
    registered = false;

    @Output() emitClick = new EventEmitter();
    
  onSubmit(): void {
    

    if(!this.enteredUsername.trim() || !this.enteredEmail.trim() || !this.enteredPassword.trim()){
      this.errorMessage = "Preencha todos os campos!";
      return;
    }
    if(this.enteredEmail.includes(" ")){
      this.errorMessage = "Email não pode conter espaços em branco";
      return;
    }
    if(!this.enteredEmail.includes("@")){
      this.errorMessage = "Inclua um '@' no endereço de email";
      return;
    }
    let afterAtSign = this.enteredEmail.indexOf("@") + 1;
    if(this.enteredEmail.charAt(afterAtSign) == ""){
      this.errorMessage = "Insira uma parte depois de '@'"
      return;
    }
    let domain = this.enteredEmail.slice(afterAtSign);
    if(!domain.includes(".com")){
      this.errorMessage = "Insira um dominio válido. Ex: exemplo@gmail.com"
      return;
    }
    if(this.enteredPassword.length < 6){
      this.errorMessage = "A senha deve ter pelo menos 6 caracteres";
      return;
    }
    if(this.enteredPassword != this.confirmPassowrd){
      this.errorMessage = "As senhas não coincidem";
      return;
    }

    this.registered = true;
    this.errorMessage = '';
  }


  onClickEntrar(){
    this.emitClick.emit();
  }

  onClickVoltarLogin(){
    this.emitClick.emit();
  }
}
