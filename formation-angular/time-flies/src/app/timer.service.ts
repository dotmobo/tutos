import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Timer } from './timer';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { catchError, share, map, tap } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { interval } from 'rxjs/observable/interval';

@Injectable()
export class TimerService {
  ticks$ = interval(1000).pipe(share());

  constructor(private http: HttpClient) {}

  getTimers(): Observable<Array<Timer>> {
    return this.http
      .get<Array<Timer>>(environment.api_url)
      .pipe(catchError(error => _throw(error)));
  }

  getTimer(id: number): Observable<Timer> {
    return this.http
      .get<Timer>(`${environment.api_url}/${id}`)
      .pipe(catchError(error => _throw(error)));
  }

  updateTimer(timer: Timer): Observable<Timer> {
    return this.http
      .put<Timer>(`${environment.api_url}/${timer.id}`, timer)
      .pipe(catchError(error => _throw(error)));
  }

  createTimer(timer: Timer): Observable<Timer> {
    timer = {
      ...timer,
      start: Date.now()
    };

    return this.http
      .post<Timer>(`${environment.api_url}`, timer)
      .pipe(catchError(error => _throw(error)));
  }

  pauseTimer(timer: Timer) {
    timer = {
      ...timer,
      pause: Date.now()
    };
    return this.updateTimer(timer);
  }

  resumeTimer(timer: Timer) {
    const now = Date.now();
    timer = {
      ...timer,
      idle: timer.idle - timer.pause + now,
      pause: 0
    };
    return this.updateTimer(timer);
  }

}
