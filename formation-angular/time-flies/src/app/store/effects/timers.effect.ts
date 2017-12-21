import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { TimerService } from '../../timer.service';

import { Timer } from '../../timer';

import * as fromTimers from '../actions/timers.action';

@Injectable()
export class TimersEffects {
  constructor(private actions$: Actions, private timerService: TimerService) {}

  @Effect()
  loadTimers$ = this.actions$
    .ofType(fromTimers.LOAD_TIMERS)
    .pipe(
      switchMap(() => this.timerService.getTimers()),
      map(timers => new fromTimers.LoadTimersSuccess(timers)),
      catchError(error => of(new fromTimers.LoadTimersFail(error)))
    );

  @Effect()
  PauseTimer$ = this.actions$
    .ofType(fromTimers.PAUSE_TIMER)
    .pipe(
      switchMap((action: fromTimers.PauseTimer) =>
        this.timerService.pauseTimer(action.payload)
      ),
      map(timer => new fromTimers.PauseTimerSuccess(timer)),
      catchError(error => of(new fromTimers.PauseTimerFail(error)))
    );

  @Effect()
  ResumeTimer$ = this.actions$
    .ofType(fromTimers.RESUME_TIMER)
    .pipe(
      switchMap((action: fromTimers.ResumeTimer) =>
        this.timerService.resumeTimer(action.payload)
      ),
      map(timer => new fromTimers.ResumeTimerSuccess(timer)),
      catchError(error => of(new fromTimers.ResumeTimerFail(error)))
    );

  @Effect()
  DeleteTimer$ = this.actions$
    .ofType(fromTimers.DELETE_TIMER)
    .pipe(
      switchMap((action: fromTimers.DeleteTimer) =>
        this.timerService.deleteTimer(action.payload)
      ),
      map(timer => new fromTimers.DeleteTimerSuccess(timer)),
      catchError(error => of(new fromTimers.DeleteTimerFail(error)))
    );
}
