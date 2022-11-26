import { Component, OnInit } from '@angular/core';

import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-adm-clients',
  templateUrl: './adm-clients.component.html',
  styleUrls: ['./adm-clients.component.css']
})
export class AdmClientsComponent implements OnInit {

  clients: Client[] = []
  client!: Client

  constructor( private clientservice : ClientService) { }

  ngOnInit() {
    this.clientservice.getClients().subscribe((result) => {
      this.clients = result;
    });
  }



}
