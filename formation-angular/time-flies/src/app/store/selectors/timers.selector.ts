import { createSelector } from '@ngrx/store';

import * as fromTimers from '../reducers';

export const selectFeature = (state: fromTimers.TimerFliesState) =>
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
