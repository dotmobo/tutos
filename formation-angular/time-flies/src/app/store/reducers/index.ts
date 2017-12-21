import { ActionReducerMap } from '@ngrx/store';

import * as fromTimers from './timers.reducer';

export interface TimerFliesState {
  timers: fromTimers.TimerState;
}

export const reducers: ActionReducerMap<TimerFliesState> = {
  timers: fromTimers.reducer
};

export { TimerState } from './timers.reducer';
