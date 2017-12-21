import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, switchMap } from 'rxjs/operators';

import * as fromStore from '../store';

import { Timer } from '../timer';
import { TimerService } from '../timer.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'tf-timer-list',
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerListComponent implements OnInit {
  timers$: Observable<Array<Timer>>;

  constructor(
    // private timerService: TimerService,
    private store: Store<fromStore.TimerFliesState>) {}


  resumeTimer(timer: Timer) {
    // this.timerService.resumeTimer(timer);
  }

  pauseTimer(timer: Timer) {
    // this.timerService.pauseTimer(timer);
  }

  ngOnInit() {
    this.timers$ = this.store.select(fromStore.selectAllTimers);
    this.store.dispatch(new fromStore.LoadTimers());
  }
}
