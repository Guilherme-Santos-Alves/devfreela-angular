import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProject } from 'src/app/shared/interfaces/IProject';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) {}

  getProjects(){
    return this.http.get<IProject[]>(`${environment.apiUrl}/projects`)
  }

  deleteProject(id: string | undefined){
    return this.http.delete(`${environment.apiUrl}/projects/${id}`)
  }
}
