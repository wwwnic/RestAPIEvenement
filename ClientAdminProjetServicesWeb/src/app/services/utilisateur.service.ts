import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from '../entities/utilisateur';
import { LoginInfo } from '../entities/loginInfo';
import { Observable } from 'rxjs';
import { DeleteKey } from '../entities/deleteKey';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'ApiKey': '9c9eeb7b-7b3f-439f-aadc-586cb0b8a265'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'https://localhost:44312/api/Utilisateur';

  constructor(private http: HttpClient) { }

  doLogin(logInfo: LoginInfo): Observable<Utilisateur> {
    const tempUrl = `${this.apiUrl}/Login`
    var utilisateur = { nomUtilisateur: logInfo.nomUtilisateur, motDePasse: logInfo.password };
    return this.http.post<Utilisateur>(tempUrl, utilisateur, httpOptions);
  }

  getAll(): Observable<Utilisateur[]> {
    const tempUrl = `${this.apiUrl}/GetAll`;
    return this.http.get<Utilisateur[]>(tempUrl, httpOptions);
  }

  updateUser(user: Utilisateur): Observable<Utilisateur> {
    const tempUrl = `${this.apiUrl}/Update`;
    return this.http.put<Utilisateur>(tempUrl, user, httpOptions);
  }

  deleteUser(deleteKey: DeleteKey): Observable<Utilisateur> {
    const tempUrl = `${this.apiUrl}/Delete/${deleteKey.key}?id=${deleteKey.id}`
    return this.http.delete<Utilisateur>(tempUrl, httpOptions);
  }

  getAllUtuilisateursByName(name: string): Observable<Utilisateur[]> {
    const tempUrl = `${this.apiUrl}/GetByName?name=${name}`;
    return this.http.get<Utilisateur[]>(tempUrl, httpOptions);
  }

  getUtilisateurById(id: number): Observable<Utilisateur> {
    const tempUrl = `${this.apiUrl}/GetById?id=${id}`;
    return this.http.get<Utilisateur>(tempUrl, httpOptions);
  }

}