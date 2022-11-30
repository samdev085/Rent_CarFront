import { Login } from './../models/login';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, tap } from 'rxjs';
import { Client } from 'src/app/models/client'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
   })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url = 'https://localhost:44325/api';  // URL to web api


  authentication = false
  client!:Client
  loginClient!:Login




  constructor(private http: HttpClient) { }


  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.url}/ListClients`)
  }

  getClient(Id: string): Observable<Client> {
    //const apiUrl = `${this.url}/${clientId}`;
    return this.http.get<Client>(`${this.url}/GetUser/${Id}`);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.url}/AddUser`, client, httpOptions);
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}/UpdateUser`, client, httpOptions);
  }

  deleteClient(clientId: string): Observable<any> {
    //const apiUrl = `${this.url}/${clientId}`;
    return this.http.delete<string>(`${this.url}/DeleteUser/${clientId}`);
  }

  login(loginClient: Login): Observable<Client> {
    return this.http.post<Client>(`${this.url}/Login`, loginClient)
  }

}
