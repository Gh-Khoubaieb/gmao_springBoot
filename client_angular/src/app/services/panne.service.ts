import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Panne} from "../models/Panne";
import {Equipement} from "../models/Equipement";


@Injectable({
  providedIn: 'root'
})
export class PanneService {

  private baseURL = "http://localhost:8080/api/v1/pannes" ;
  constructor(private httpClient: HttpClient) { }

  getPannes(): Observable<Panne[]> {
        return this.httpClient.get<Panne[]>(`${this.baseURL}` ) ;
  }

  createPanne(panne: Panne): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, panne);
  }

  getPanneById(id: number): Observable<Panne>{
    return this.httpClient.get<Panne>(`${this.baseURL}/${id}`);
  }

  updatePanne(id: number, panne: Panne): Observable<Panne>{
    console.log('panne from service', panne)
    return this.httpClient.put<Panne>(`${this.baseURL}/${id}`, panne);
  }

  deletePanne(id: number):any{
    return this.httpClient.delete(`${this.baseURL}/${id}`, {responseType: 'text'});
  }

  deletePanneAndEquipmnet(idPanne: number, idEquipement: number):any{
    return this.httpClient.delete("http://localhost:8080/api/v1/equpipements/"+idPanne+"/pannes/"+ idEquipement, {responseType: 'text'});
  }
  createPanneEquipement(panne: Panne , idEquipement:number): Observable<Object>{
    return this.httpClient.post("http://localhost:8080/api/v1/equipements/"+idEquipement+"/pannes", panne);
  }
  updatePanneEquipement(idEquipement: number, idPanne:number, panne: Panne): Observable<Panne>{

    return this.httpClient.put<Panne>("http://localhost:8080/api/v1/equipements/"+idEquipement+"/pannes/" + idPanne, panne);
  }

  deletePanneEquipement( equipementId: number,panneId: number ):any{
    return this.httpClient.delete("http://localhost:8080/api/v1/equipements/"+equipementId+"/pannes/"+panneId, {responseType: 'text'});
  }
}



