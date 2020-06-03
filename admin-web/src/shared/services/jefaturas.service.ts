import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserAdmin } from 'src/app/shared/models/user-admin';
import { Observable } from 'rxjs';
import {  tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JefaturasService {

  apiUrl = environment.apiUrl.split(":")[2] ? environment.apiUrl : (environment.apiUrl + "5000/");
  headers;

  constructor(private httpClient: HttpClient) {

    this.headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });
  }

  GetTodasJefaturas(useradmin: UserAdmin) {
    const params = new HttpParams()
      .set('numberPage', String(useradmin['numberPage']))
      .set('pageSize', String(useradmin['pageSize']));
    return this.httpClient.get(this.apiUrl + 'Jefaturas/GetAllHeadquarters', { headers: this.headers, params: params });
  }


  getAllUsers(useradmin: UserAdmin) {
    const params = new HttpParams()
      .set('numberPage', String(useradmin['numberPage']))
      .set('pageSize', String(useradmin['pageSize']));
    
    return this.httpClient.get(this.apiUrl + 'Usuarios/GetAll', { headers: this.headers, params });
  }


  updateHeadquarters(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}Jefaturas/Update`, data, { headers: this.headers });
  }

  searchHeadquarters(title: string): Observable<any> {
    // const URL_API = 'https://restcountries.eu/rest/v2/all';
    // const URL_API = "https://restcountries.eu/rest/v2/name/";
    const params = new HttpParams()
      .set('title', title);
  
    return this.httpClient.get<any>(`${this.apiUrl}Jefaturas/SearchHeadquarters `, { headers: this.headers, params });
  }


  searchUsers(toSearch: string): Observable<any> {
    const params = new HttpParams()
      .set('toSearch', toSearch);   

    return this.httpClient.get<any>(`${this.apiUrl}Jefaturas/SearchUsers`, { headers: this.headers, params });
  }


  createHeadquarter(data: any): Observable<any> {   
    return this.httpClient.post<any>(`${this.apiUrl}Jefaturas/Create`, data, { headers: this.headers });
  }


  getOfficialsHeadquarter(id): Observable<any> {   
    const params = new HttpParams()
    .set('idJefatura', id);   
    return this.httpClient.get<any>(`${this.apiUrl}Jefaturas/GetId`, { headers: this.headers , params});
  }


  assignOfficials(officials): Observable<any>{

    const data = {
      IdJefatura: 0,
      IdPer: officials
    };

    return this.httpClient.post<any>(`${this.apiUrl}Jefaturas/Assign`, data, { headers: this.headers });
  }
  

}
