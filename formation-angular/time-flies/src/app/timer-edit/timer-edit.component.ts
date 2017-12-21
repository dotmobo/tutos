import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, tap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { TimerService } from '../timer.service';
import { Timer } from '../timer';

@Component({
  selector: 'tf-timer-edit',
  templateUrl: './timer-edit.component.html',
  styleUrls: ['./timer-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerEditComponent implements OnInit {
  timer$: Observable<Timer>;
  constructor(
    private route: ActivatedRoute,
    private timerService: TimerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.timer$ = this.route.paramMap.pipe(
      // tap((param: ParamMap) => { if(param.get('id')===null) _throw(() => { title: "" })}),
      map((param: ParamMap) => parseInt(param.get('id'), 10)),

      switchMap<number, Timer>(
        (id: number) =>
          id
            ? this.timerService.getTimer(id)
            : of({ title: 'place your title here' })
      )
    );
  }

  save(timer: Timer) {
    this.timerService[timer.id ? 'updateTimer' : 'createTimer'](
      timer
    ).subscribe(() => this.router.navigate(['/']));
  }
}
