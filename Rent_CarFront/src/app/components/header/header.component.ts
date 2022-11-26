import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authenticated!:boolean

  constructor( private clientService : ClientService,
              private router:Router) { }

  ngOnInit(): void {
    this.authenticated = this.clientService.authentication
  }

  logout():void {
    window.location.replace
    this.router.navigate(['/']);
  }
}
