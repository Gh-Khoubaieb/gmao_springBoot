import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Artisan} from "../models/Artisan";



@Injectable({
  providedIn: 'root'
})
export class ArtisanService {

  private baseURL = "http://localhost:8080/api/v1/artisans" ;
  constructor(private httpClient: HttpClient) { }

  getArtisans(): Observable<Artisan[]> {
        return this.httpClient.get<Artisan[]>(`${this.baseURL}` ) ;
  }

  createArtisan(artisan: Artisan): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, artisan);
  }

  getArtisanById(id: number): Observable<Artisan>{
    return this.httpClient.get<Artisan>(`${this.baseURL}/${id}`);
  }

  updateArtisan(id: number, artisan: Artisan): Observable<Artisan>{
    return this.httpClient.put<Artisan>(`${this.baseURL}/${id}`, artisan);
  }

  deleteArtisan(id: number):any{
    return this.httpClient.delete(`${this.baseURL}/${id}`, {responseType: 'text'});
  }
}



