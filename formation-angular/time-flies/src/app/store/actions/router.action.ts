import { Action } from '@ngrx/store';

export const GO = '[Router] Go';

export class Go implements Action {
  readonly type = GO;
  constructor(
    public payload: {
      path: any[];
    }
  ) {}
}

export type Actions = Go; // Back, Forward
