import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProject } from 'src/app/shared/interfaces/IProject';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProjectCEService {

  constructor(private http: HttpClient) {}

  postProject(payload: IProject){
    return this.http.post(`${environment.apiUrl}/projects`, payload)
  }

  putProject(payload: IProject){
    return this.http.put(`${environment.apiUrl}/projects/${payload.idClient}`, payload)
  }

  getProject(id: number){
    return this.http.get(`${environment.apiUrl}/projects/${id}`)
  } 
}
