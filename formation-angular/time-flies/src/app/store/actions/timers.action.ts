import { Action } from '@ngrx/store';

import { Timer } from '../../timer';

// LOADING TIMERS
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

// PAUSE TIMER
export const PAUSE_TIMER = '[Time Flies] Pause Timer';
export const PAUSE_TIMER_SUCCESS = '[Time Flies] Pause Timer Sucess';
export const PAUSE_TIMER_FAIL = '[Time Flies] Pause Timer Fail';

export class PauseTimer implements Action {
  readonly type = PAUSE_TIMER;
  constructor(public payload: Timer) {}
}

export class PauseTimerSuccess implements Action {
  readonly type = PAUSE_TIMER_SUCCESS;
  constructor(public payload: Timer) {}
}

export class PauseTimerFail implements Action {
  readonly type = PAUSE_TIMER_FAIL;
  constructor(public payload: any) {}
}

// RESUME TIMER
export const RESUME_TIMER = '[Time Flies] Resume Timer';
export const RESUME_TIMER_SUCCESS = '[Time Flies] Resume Timer Sucess';
export const RESUME_TIMER_FAIL = '[Time Flies] Resume Timer Fail';

export class ResumeTimer implements Action {
  readonly type = RESUME_TIMER;
  constructor(public payload: Timer) {}
}

export class ResumeTimerSuccess implements Action {
  readonly type = RESUME_TIMER_SUCCESS;
  constructor(public payload: Timer) {}
}

export class ResumeTimerFail implements Action {
  readonly type = RESUME_TIMER_FAIL;
  constructor(public payload: any) {}
}

export type TimersAction =
  | LoadTimers
  | LoadTimersSuccess
  | LoadTimersFail
  | PauseTimer
  | PauseTimerFail
  | PauseTimerSuccess
  | ResumeTimer
  | ResumeTimerFail
  | ResumeTimerSuccess;
