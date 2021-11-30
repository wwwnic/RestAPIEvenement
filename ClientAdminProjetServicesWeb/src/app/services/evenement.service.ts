import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Evenement } from '../entities/Evenement';
import { Observable } from 'rxjs';
import { DeleteKey } from '../entities/deleteKey';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  private apiUrl = 'http://localhost:52871/api/Evenement';

  constructor(private http: HttpClient) { }


  getAll(): Observable<Evenement[]> {
    const tempUrl = this.apiUrl.concat('/GetAll');
    return this.http.get<Evenement[]>(tempUrl);
  }

  updateEvenement(evenement: Evenement): Observable<Evenement> {
    const tempUrl = this.apiUrl.concat('/Update');
    return this.http.put<Evenement>(tempUrl, evenement, httpOptions);
  }

  deleteEvenement(deleteKey: DeleteKey): Observable<Evenement> {
    const tempUrl = this.apiUrl.concat('/Delete/' + deleteKey.id + '/' + deleteKey.key);
    return this.http.delete<Evenement>(tempUrl, httpOptions);
  }

  getEvenementById(id: number): Observable<Evenement> {
    const tempUrl = this.apiUrl.concat('/GetById?id=' + id);
    return this.http.get<Evenement>(tempUrl);
  }

  getRecentEvenement(): Observable<Evenement[]> {
    const tempUrl = this.apiUrl.concat('/GetRecent');
    return this.http.get<Evenement[]>(tempUrl);
  }

  getAllEvenementsByOrganisateurId(int: number): Observable<Evenement[]> {
    const tempUrl = this.apiUrl.concat('/GetParOrganisateur/' + int);
    return this.http.get<Evenement[]>(tempUrl);
  }
  getAllEvenementsParPartcipant(int: number): Observable<Evenement[]> {
    const tempUrl = this.apiUrl.concat('/GetParParticipants/' + int);
    return this.http.get<Evenement[]>(tempUrl);
  }
}
