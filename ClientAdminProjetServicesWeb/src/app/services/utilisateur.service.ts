import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from '../utilisateur';
import { LoginInfo } from '../loginInfo';
import { Observable } from 'rxjs';
import { DeleteKey } from '../deleteKey';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'http://localhost:23784/api/Utilisateur';

  constructor(private http: HttpClient) { }

  doLogin(logInfo: LoginInfo): Observable<Utilisateur> {
    const tempUrl = this.apiUrl.concat('/Login?userName=' + logInfo.nomUtilisateur + '&password=' + logInfo.password);
    return this.http.post<Utilisateur>(tempUrl, logInfo);
  }

  getAll(): Observable<Utilisateur[]> {
    const tempUrl = this.apiUrl.concat('/GetAll');
    return this.http.get<Utilisateur[]>(tempUrl);
  }

  updateUser(user: Utilisateur): Observable<Utilisateur> {
    const tempUrl = this.apiUrl.concat('/Update');
    return this.http.put<Utilisateur>(tempUrl, user, httpOptions);
  }

  deleteUser(deleteKey: DeleteKey): Observable<Utilisateur> {
    const tempUrl = this.apiUrl.concat('/Delete/' + deleteKey.id + '/' + deleteKey.key);
    return this.http.delete<Utilisateur>(tempUrl, httpOptions);
  }

}