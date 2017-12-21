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

}
