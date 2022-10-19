import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Employe} from "../models/Employe";



@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private baseURL = "http://localhost:8080/api/v1/employees" ;
  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employe[]> {
        return this.httpClient.get<Employe[]>(`${this.baseURL}` ) ;
  }

  createEmployee(employe: Employe): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employe);
  }

  getEmployeeById(id: number): Observable<Employe>{
    return this.httpClient.get<Employe>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employe: Employe): Observable<Employe>{
    return this.httpClient.put<Employe>(`${this.baseURL}/${id}`, employe);
  }

  deleteEmployee(id: number):any{
    return this.httpClient.delete(`${this.baseURL}/${id}`, {responseType: 'text'});
  }
}



