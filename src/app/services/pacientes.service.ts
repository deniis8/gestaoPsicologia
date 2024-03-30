import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Pacientes } from '../Models/Pacientes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class PacientesService {

  private baseApiUrl = environment.baseApiUrlLocal;

  constructor(private http: HttpClient) { }

  getAllPacientes(): Observable<Pacientes[]>{
    console.log(`${this.baseApiUrl}api/pacientes`);
    return this.http.get<Pacientes[]>(`${this.baseApiUrl}api/pacientes`);
  }

}
