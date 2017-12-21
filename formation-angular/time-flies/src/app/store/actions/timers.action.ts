import { Action } from '@ngrx/store';

import { Timer } from '../../timer';

export const LOAD_TIMERS = '[Time Flies] Load Timers';
export const LOAD_TIMERS_SUCCESS = '[Time Flies] Load Timers Sucess';
export const LOAD_TIMERS_FAIL = '[Time Flies] Load Timers Fail';

export class LoadTimers implements Action {
  readonly type = LOAD_TIMERS;
}

export class LoadTimersSuccess implements Action {
  readonly type = LOAD_TIMERS_SUCCESS;
  constructor(public payload: Array<Timer>) {}
}

export class LoadTimersFail implements Action {
  readonly type = LOAD_TIMERS_FAIL;
  constructor(public payload: any) {}
}

export type TimersAction = LoadTimers | LoadTimersSuccess | LoadTimersFail;

