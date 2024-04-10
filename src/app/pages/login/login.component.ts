import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Route } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: Login;
  constructor(private http: HttpClient) {
    this.loginObj= new Login();
  }
  onLogin() {
    debugger;
    console.log('Pase por aca'+this.loginObj.Correo);
    this.http.post('https://localhost:7027/api/Estudiante/Login', this.loginObj).subscribe((res:any)=>{
      if(res.result) {
        
        alert('Logueo exitoso');
       // this.route.navigateByUrl('');
      }
    });

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


