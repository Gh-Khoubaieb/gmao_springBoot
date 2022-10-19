import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/Category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private  httpClient: HttpClient) { }
  private baseUrl ="https://localhost:7117/api/Category" ;


  public getCategories() : Observable<Category[]>{
   return  this.httpClient.get<Category[]>(`${this.baseUrl}`) ;

  }

  public exportCategoriesToSheet() : Observable<Category[]>{
    return  this.httpClient.get<Category[]>("https://localhost:7117/api/Category/tableToSheet") ;

  }
}
