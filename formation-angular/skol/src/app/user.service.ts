import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';

import { User } from './user';

const API_URL = 'http://localhost:3000/users';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Array<User>> {
    return this.http
      .get<Array<User>>(API_URL)
      .pipe(catchError(this.handleError));
  }

  getUser(id: number): Observable<User> {
    return this.http
      .get<User>(`${API_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  updateUser(user: User): Observable<User> {
    return this.http
      .put<User>(`${API_URL}/${user.id}`, user)
      .pipe(catchError(this.handleError));
  }

  removeUser(user: User): Observable<any> {
    return this.http
      .delete(`${API_URL}/${user.id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error) {
    console.log("Prise en charge de l'erreur");
    return _throw(error);
  }