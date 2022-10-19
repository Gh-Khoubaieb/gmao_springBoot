import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Equipe} from "../models/Equipe";

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private baseURL = "http://localhost:8080/api/v1/equipes" ;
  constructor(private httpClient:HttpClient) { }

  getEquipes(): Observable<Equipe[]> {
    return this.httpClient.get<Equipe[]>(`${this.baseURL}`)
  }

  createEquipe(equipe: Equipe): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, equipe);
  }

  getEquipeById(id: number): Observable<Equipe>{
    return this.httpClient.get<Equipe>(`${this.baseURL}/${id}`);
  }

  updateEquipe(id: number, equipe: Equipe): Observable<Equipe>{
    return this.httpClient.put<Equipe>(`${this.baseURL}/${id}`, equipe);
  }

  deleteEquipe(id: number):any{
    return this.httpClient.delete(`${this.baseURL}/${id}`, {responseType: 'text'});
  }
}
