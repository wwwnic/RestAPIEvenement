import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Evenement } from '../entities/Evenement';
import { Commentaire } from '../entities/Commentaire';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'ApiKey': '9c9eeb7b-7b3f-439f-aadc-586cb0b8a265'
  })
}
@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private apiUrl = 'https://localhost:44312/api/Commentaire';

  constructor(private http: HttpClient) { }

  getAllByEvenementId(id: number): Observable<Commentaire[]> {
    const tempUrl = `${this.apiUrl}/GetByEvenement?id=${id}`;
    return this.http.get<Commentaire[]>(tempUrl, httpOptions);
  }
}
