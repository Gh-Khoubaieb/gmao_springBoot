import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Intervention} from "../models/Intervention";




@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  private baseURL = "http://localhost:8080/api/v1/interventions" ;
  constructor(private httpClient: HttpClient) { }

  getInterventions(): Observable<Intervention[]> {
        return this.httpClient.get<Intervention[]>(`${this.baseURL}` ) ;
  }

  createIntervention(intervention: Intervention): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, intervention);
  }

  getInterventionById(id: number): Observable<Intervention>{
    return this.httpClient.get<Intervention>(`${this.baseURL}/${id}`);
  }

  updateIntervention(id: number, intervention: Intervention): Observable<Intervention>{
    console.log('Intervention from service', intervention)
    return this.httpClient.put<Intervention>(`${this.baseURL}/${id}`, intervention);
  }

  deleteIntervention(id: number):any{
    return this.httpClient.delete(`${this.baseURL}/${id}`, {responseType: 'text'});
  }

  deletePanneAndIntervention(idPanne: number, idIntervention: number):any{
    return this.httpClient.delete("http://localhost:8080/api/v1/pannes/"+idPanne+"/interventions/"+ idIntervention, {responseType: 'text'});
  }
  createPanneIntervention(intervention: Intervention , idPanne:number): Observable<Object>{
    return this.httpClient.post("http://localhost:8080/api/v1/pannes/"+idPanne+"/interventions", intervention);
  }
  updatePanneIntervention(idIntervention: number, idPanne:number, intervention: Intervention): Observable<Intervention>{

    return this.httpClient.put<Intervention>("http://localhost:8080/api/v1/pannes/"+idPanne+"/interventions/" + idIntervention, intervention);
  }

  deletePanneIntervention( InterventionId: number,panneId: number ):any{
    return this.httpClient.delete("http://localhost:8080/api/v1/pannes/"+panneId+"/interventions/"+InterventionId, {responseType: 'text'});
  }
}



