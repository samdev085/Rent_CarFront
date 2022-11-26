import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  client!: Client
  message!: string
  messageError!: string


  constructor(private clientService:ClientService,
              private router:Router) { }

  ngOnInit(): void {
    this.client = new Client
  }

  addClient(): any {
    this.clientService.addClient(this.client).subscribe((clientRest: Client)=>{
      this.clientService.client = clientRest
    })
    if (this.clientService.client === null) {
      this.messageError="Registration Fail!!"
    }
    this.message ="Registration created successfully !!"
    setTimeout(() => {
      this.message =""
      this.router.navigate(['login']);
    }, 2000);
  }

}
