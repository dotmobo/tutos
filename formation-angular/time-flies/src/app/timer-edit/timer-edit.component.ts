import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, tap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Store } from '@ngrx/store';

import * as fromStore from '../store';

import { Timer } from '../timer';

@Component({
  selector: 'tf-timer-edit',
  templateUrl: './timer-edit.component.html',
  styleUrls: ['./timer-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerEditComponent implements OnInit {
  timer$: Observable<Timer>;
  constructor(private store: Store<fromStore.TimerFliesState>) {}

  ngOnInit() {
    this.timer$ = this.store.select(fromStore.selectEditedTimer);
    this.timer$.subscribe((timer) => {
        if (!Object.keys(timer).length) {
          this.store.dispatch(new fromStore.LoadTimers());
        }
    });
  }

  save(timer: Timer) {
    // this.timerService[timer.id ? 'updateTimer' : 'createTimer'](
    //   timer
    // ).subscribe(() => this.router.navigate(['/']));
  }
}
