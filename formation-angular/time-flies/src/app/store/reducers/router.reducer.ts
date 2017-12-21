import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Params,
} from '@angular/router';
import {
  createFeatureSelector,
  // ActionReducerMap
} from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';

interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export const selectRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('routerReducer');

// important pour de bonnes pérfs (particulièrement avec le devtool)
export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}
