import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Bien} from "../models/Bien";

@Injectable({
  providedIn: 'root'
})
export class BienService {

  private baseURL = "http://localhost:8080/api/v1/biens" ;
  constructor(private httpClient: HttpClient) { }

  getBiens(): Observable<Bien[]> {
        return this.httpClient.get<Bien[]>(`${this.baseURL}` ) ;
  }

  createBien(bien: Bien): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, bien);
  }

  getBienById(id: number): Observable<Bien>{
    return this.httpClient.get<Bien>(`${this.baseURL}/${id}`);
  }

  updateBien(id: number, bien: Bien): Observable<Bien>{
    console.log('bien from service', bien)
    return this.httpClient.put<Bien>(`${this.baseURL}/${id}`, bien);
  }

  deleteBien(id: number):any{
    return this.httpClient.delete(`${this.baseURL}/${id}`, {responseType: 'text'});
  }

  deleteBienAndEquipmnet(idBien: number, idEquipement: number):any{
    return this.httpClient.delete("http://localhost:8080/api/v1/biens/"+idBien+"/equipements/"+ idEquipement, {responseType: 'text'});
  }

}



