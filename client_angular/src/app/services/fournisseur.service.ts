import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fournisseur} from "../models/Fournisseur";
import {Equipement} from "../models/Equipement";



@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private baseURL = "http://localhost:8080/api/v1/fournisseurs" ;
  constructor(private httpClient: HttpClient) { }

  getFournisseurs(): Observable<Fournisseur[]> {
        return this.httpClient.get<Fournisseur[]>(`${this.baseURL}` ) ;
  }

  createFournisseur(fournisseur: Fournisseur): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, fournisseur);
  }

    createFournisseurToSociete(idSociete: number,fournisseur: Fournisseur ): Observable<Object>{
    return this.httpClient.post("http://localhost:8080/api/v1/societes/"+idSociete+"/fournisseurs", fournisseur);
  }

  getFournisseurById(id: number): Observable<Fournisseur>{
    return this.httpClient.get<Fournisseur>(`${this.baseURL}/${id}`);
  }

  updateFournisseur(id: number, societe: Fournisseur): Observable<Fournisseur>{
    return this.httpClient.put<Fournisseur>(`${this.baseURL}/${id}`, societe);
  }

  deleteFournisseur(id: number):any{
    return this.httpClient.delete(`${this.baseURL}/${id}`, {responseType: 'text'});
  }

  deleteFournisseurSociete(societeId: number, fournisseurId: number):any{
    return this.httpClient.delete("http://localhost:8080/api/v1/societes/"+societeId+"/fournisseurs/"+fournisseurId, {responseType: 'text'});
  }

  updateFournisseurSociete(idSociete: number, idFournisseur:number, fournisseur: Fournisseur) {
    return this.httpClient.put<Equipement>("http://localhost:8080/api/v1/societes/" + idSociete + "/fournisseurs/" + idFournisseur, fournisseur);
  }
}



