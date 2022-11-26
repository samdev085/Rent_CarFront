import { Component, OnInit } from '@angular/core';

import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  authenticated = this.clientService.authentication
  client!:Client

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.client = this.clientService.client
  }

}
