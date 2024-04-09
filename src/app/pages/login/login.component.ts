import { HttpClient } from '@angular/comon/http';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/comon/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: Login;
  constructor() {
    this.loginObj= new Login();
  }
  onLogin() {
    this.http.Get('https://localhost:7027/api/Estudiante/gh%2Cghhj?correo=gh&pass=ghhj', this.loginObj).suscribe((res:any)=>{
      if(res.result) {
        
      }
    })

  }
}

export class Login {
Correo: string;
Password: string;
constructor() {
  this.Correo='';
  this.Password='';
}

}


