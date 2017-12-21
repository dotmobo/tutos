import * as fromTimers from '../actions/timers.action';
import { Timer } from '../../timer';

export interface TimerState {
  entities: { [id: number]: Timer };
  loaded: boolean;
  loading: boolean;
}

export function reducer(
  state: TimerState = {
    entities: {},
    loaded: false,
    loading: false
  },
  action: fromTimers.TimersAction
) {
  switch (action.type) {

    case fromTimers.LOAD_TIMERS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromTimers.LOAD_TIMERS_SUCCESS: {
      const timers = action.payload;
      const entities = timers.reduce((en: { [id: number]: Timer }, timer) => {
        return { ...en, [timer.id]: timer };
      }, {...state.entities});

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromTimers.LOAD_TIMERS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }

    case fromTimers.RESUME_TIMER_SUCCESS:
    case fromTimers.PAUSE_TIMER_SUCCESS: {
      const timer = action.payload;
      const entities = {
        ...state.entities,
        [timer.id]: timer
      };
      return {
        ...state,
        entities,
      };
    }

    case fromTimers.DELETE_TIMER_SUCCESS: {
      const timer = action.payload;
      const entities = {
        ...state.entities,
      };

      delete entities[timer.id];

      console.log(entities);

      return {
        ...state,
        entities,
      };
    }

  }

  return state;
}
