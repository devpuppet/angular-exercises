import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { GithubService, Repo } from '../services/github.service';
import { PeopleService, Person } from '../services/people.service';

@Component({
  selector: 'app-http-client-example',
  templateUrl: './http-client-example.component.html',
  styleUrls: ['./http-client-example.component.css']
})
export class HttpClientExampleComponent implements OnInit {
  repos$!: Observable<Repo[]>;
  people$!: Observable<Person[]>;
  loading = false;
  errorMessage: any;
  username: string = '';
  person = { name: '' };

  constructor(private githubService: GithubService, private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.refreshPeople();
  }

  loadRepos() {
    this.repos$ = this.githubService.getRepos(this.username, new HttpParams({ fromObject: { sort: 'description' }}))
    .pipe(
      catchError(err => {
        console.log('Error occured when getting repo', err);
        return of( [{ id: 1, name: 'Default', owner: { login: 'unknown', avatar_url: 'http://www.quickmeme.com/img/24/244d353bfb0b3ad1854098555021b8d7a439b5bb1d66488313c1caaf2938a3ef.jpg' } }] );
      })
    );
  }

  refreshPeople() {
    this.people$ = this.peopleService.getPeople();
  }

  addPerson() {
    this.peopleService.addPerson(this.person)
      .subscribe(data => this.refreshPeople());
  }

}