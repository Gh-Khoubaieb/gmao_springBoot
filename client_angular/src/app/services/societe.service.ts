import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Societe} from "../models/Societe";

@Injectable({
  providedIn: 'root'
})
export class SocieteService {

  private baseURL = "http://localhost:8080/api/v1/societes" ;
  constructor(private httpClient: HttpClient) { }

  getSocietes(): Observable<Societe[]> {
        return this.httpClient.get<Societe[]>(`${this.baseURL}` ) ;
  }

  createSociete(societe: Societe): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, societe);
  }

  getSocieteById(id: number): Observable<Societe>{
    return this.httpClient.get<Societe>(`${this.baseURL}/${id}`);
  }

  updateSociete(id: number, societe: Societe): Observable<Societe>{
    return this.httpClient.put<Societe>(`${this.baseURL}/${id}`, societe);
  }

  deleteSociete(id: number):any{
    return this.httpClient.delete(`${this.baseURL}/${id}`, {responseType: 'text'});
  }

  deleteSocieteFournisseur(societeId: number, fournisseurId: number):any{
    return this.httpClient.delete("http://localhost:8080/api/v1/societes/"+societeId+"/fournisseurs/"+fournisseurId, {responseType: 'text'});
  }
}



