import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import * as fromTimers from './timers.reducer';

export interface TimerFliesState {
  timers: fromTimers.TimerState;
  routerReducer: RouterReducerState;
}

export const reducers: ActionReducerMap<TimerFliesState> = {
  timers: fromTimers.reducer,
  routerReducer
};

export { TimerState } from './timers.reducer';
export { CustomSerializer } from './router.reducer';
