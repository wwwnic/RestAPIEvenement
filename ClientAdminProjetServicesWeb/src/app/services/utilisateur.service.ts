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
  private apiUrl = 'http://10.0.0.149:23784/api/Utilisateur';

  constructor(private http: HttpClient) { }

  doLogin(logInfo: LoginInfo): Observable<Utilisateur> {
    const tempUrl = this.apiUrl.concat('/Login');
	var utilisateur = {nomUtilisateur:logInfo.nomUtilisateur,motDePasse:logInfo.password};
    return this.http.post<Utilisateur>(tempUrl, utilisateur);
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