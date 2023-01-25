import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl = 'https://api.github.com/';

  constructor(private http: HttpClient) { }

  public getRepos(username: string, params?: HttpParams): Observable<Repo[]> {
    console.log('getRepos successful');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.get<Repo[]>(`${this.baseUrl}users/${username}/repos`, { params, headers });
  }
}

export interface Repo {
  id: number,
  name: string,
  owner: Owner
}

export interface Owner {
  login: string;
  avatar_url: string
}