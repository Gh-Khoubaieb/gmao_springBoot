import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Equipement} from "../models/Equipement";
import {Bien} from "../models/Bien";

@Injectable({
  providedIn: 'root'
})
export class EquipementService {
  private baseURL = "http://localhost:8080/api/v1/equipements" ;
  constructor(private httpClient:HttpClient) { }

  getEquipements(): Observable<Equipement[]> {
    return this.httpClient.get<Equipement[]>(`${this.baseURL}`)
  }

  createEquipement(equipement: Equipement): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, equipement);
  }

  createEquipementBien(equipement: Equipement , idBien:number): Observable<Object>{
    return this.httpClient.post("http://localhost:8080/api/v1/biens/"+idBien+"/equipements", equipement);
  }

  getEquipementById(id: number): Observable<Equipement>{
    return this.httpClient.get<Equipement>(`${this.baseURL}/${id}`);
  }

  updateEquipement(id: number, equipement: Equipement): Observable<Equipement>{
    return this.httpClient.put<Equipement>(`${this.baseURL}/${id}`, equipement);
  }

  updateEquipementBien(idBien: number, idEquipement:number, equipement: Equipement): Observable<Equipement>{
    console.log("updated equipement from service" ,equipement)
    return this.httpClient.put<Equipement>("http://localhost:8080/api/v1/biens/"+idBien+"/equipements/" + idEquipement, equipement);
  }


  deleteEquipement(id: number):any{
    return this.httpClient.delete(`${this.baseURL}/${id}`, {responseType: 'text'});
  }


  deleteEquipementBien(bienId: number, equipementId: number):any{
    return this.httpClient.delete("http://localhost:8080/api/v1/biens/"+bienId+"/equipements/"+equipementId, {responseType: 'text'});
  }
}
