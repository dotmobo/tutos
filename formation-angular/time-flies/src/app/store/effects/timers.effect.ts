import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { TimerService } from '../../timer.service';

import * as fromTimers from '../actions/timers.action';

@Injectable()
export class TimersEffects {
  constructor(private actions$: Actions, private timerService: TimerService) {}

  @Effect()
  loadTimers$ = this.actions$.ofType(fromTimers.LOAD_TIMERS)
  .pipe(
    switchMap(() => this.timerService.getTimers()),
    map(timers => new fromTimers.LoadTimersSuccess(timers)),
    catchError(error => of(new fromTimers.LoadTimersFail(error)))
  );

  @Effect()
  pauseTimer$ = this.actions$.ofType(fromTimers.PAUSE_TIMER)
  .pipe(
    map((action: fromTimers.PauseTimer) => action.payload),
    switchMap((timer) => this.timerService.pauseTimer(timer)),
    map(timer => new fromTimers.PauseTimerSuccess(timer)),
    catchError(error => of(new fromTimers.PauseTimerFail(error)))
  );


  @Effect()
  resumeTimer$ = this.actions$.ofType(fromTimers.RESUME_TIMER)
  .pipe(
    map((action: fromTimers.ResumeTimer) => action.payload),
    switchMap((timer) => this.timerService.resumeTimer(timer)),
    map(timer => new fromTimers.ResumeTimerSuccess(timer)),
    catchError(error => of(new fromTimers.ResumeTimerFail(error)))
  );

}
