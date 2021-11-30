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
  private apiUrl = 'https://localhost:44312/api/Evenement';

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
}
