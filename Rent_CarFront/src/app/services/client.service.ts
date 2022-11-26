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
  url = 'https://localhost:44394/api/Clients';  // URL to web api


  authentication = false
  client!:Client
  loginClient!:Login




  constructor(private http: HttpClient) { }


  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url)
  }

  getClient(clientId: number): Observable<Client> {
    const apiUrl = `${this.url}/${clientId}`;
    return this.http.get<Client>(apiUrl);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.url, client, httpOptions);
  }

  updateClient(client: Client): Observable<any> {
    return this.http.put<Client>(this.url, client, httpOptions);
  }

  deleteClient(clientId: number): Observable<any> {
    const apiUrl = `${this.url}/${clientId}`;
    return this.http.delete<number>(apiUrl, httpOptions);
  }

  login(loginClient: Login): Observable<Client> {
    return this.http.post<Client>(`${this.url}/login`, loginClient)
  }

}
