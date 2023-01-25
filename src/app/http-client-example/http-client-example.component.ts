import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http-client-example',
  templateUrl: './http-client-example.component.html',
  styleUrls: ['./http-client-example.component.css']
})
export class HttpClientExampleComponent implements OnInit {
  private baseUrl = 'https://api.github.com/';
  private username = 'devpuppet';
  repos$!: Observable<Repo[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.repos$ = this.getRepos();
  }

  public getRepos() {
    return this.http.get<Repo[]>(`${this.baseUrl}users/${this.username}/repos`);
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