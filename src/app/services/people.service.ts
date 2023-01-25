import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.baseUrl}people`);
  }

  addPerson(person: Person): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(person);
    return this.http.post(`${this.baseUrl}people`, body, { headers });
  }
}

export interface Person {
  id?: number,
  name: string
}