import { createSelector } from '@ngrx/store';

import * as fromTimers from '../reducers/timers.reducer';
import * as fromRouter from '../reducers/router.reducer';
import { TimerFliesState } from '../reducers';
import { Timer } from '../../timer';

export const selectFeature = (state: TimerFliesState) =>
  state.timers;

export const selectTimersEntities = createSelector(
  selectFeature,
  (state: fromTimers.TimerState) => state.entities
);

export const selectAllTimers = createSelector(
  selectTimersEntities,
  entities => Object.keys(entities).map(id => entities[id])
);

export const selectTimersLoading = createSelector(
  selectFeature,
  state => state.loading
);

export const selectEditedTimer = createSelector(
  selectTimersEntities,
  fromRouter.selectRouterState,
  (entities, router): Timer => {
    return router.state && entities[router.state.params.id] || {}; // || {} pour 'new'
  }
);

