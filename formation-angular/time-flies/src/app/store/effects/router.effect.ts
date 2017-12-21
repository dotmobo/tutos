import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';

import { map, tap } from 'rxjs/operators';

import * as fromRouter from '../actions/router.action';

@Injectable()
export class RouterEffects {
  constructor(private actions$: Actions, private router: Router) {}

  @Effect({ dispatch: false })
  navigate$ = this.actions$
    .ofType(fromRouter.GO)
    .pipe(
      map((action: fromRouter.Go) => action.payload),
      tap(({ path }) => {
        this.router.navigate(path);
      })
  );
}
