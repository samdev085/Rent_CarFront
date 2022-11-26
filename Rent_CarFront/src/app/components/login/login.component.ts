import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  message!: string
  client!:Client
  loginClient!:Login
  messageError!:string

  constructor(private clientService:ClientService,
              private router:Router) { }

  ngOnInit(): void {
    this.loginClient = new Login
  }

  login(): any {
    this.clientService.login(this.loginClient).subscribe((clientRest: Client)=>{
      this.clientService.client = clientRest
    })
    if (this.clientService.client === null) {
      this.messageError="Login form incorrect !!"
    }
    this.message ="Welcome !!"
    this.clientService.authentication = true
    setTimeout(() => {
      this.message=""
      this.router.navigate(['clientProfile']);
    }, 2000);
  }

}
