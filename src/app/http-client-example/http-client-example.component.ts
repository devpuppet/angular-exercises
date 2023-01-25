import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { GithubService, Repo } from '../services/github.service';

@Component({
  selector: 'app-http-client-example',
  templateUrl: './http-client-example.component.html',
  styleUrls: ['./http-client-example.component.css']
})
export class HttpClientExampleComponent implements OnInit {
  repos$!: Observable<Repo[]>;
  loading = false;
  errorMessage: any;
  username: string = '';

  constructor(private githubService: GithubService) { }

  ngOnInit(): void { }

  loadRepos() {
    this.repos$ = this.githubService.getRepos(this.username, new HttpParams().set('sort', 'description'))
    .pipe(
      catchError(err => {
        console.log('Error occured when getting repo', err);
        return of( [{ id: 1, name: 'Default', owner: { login: 'unknown', avatar_url: 'http://www.quickmeme.com/img/24/244d353bfb0b3ad1854098555021b8d7a439b5bb1d66488313c1caaf2938a3ef.jpg' } }] );
      })
    );
  }

}