import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Timer } from './timer';
import { TimerService } from './timer.service';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {
  constructor(private timerService: TimerService) {}

  transform(timer: Timer): Observable<string> {
    return this.timerService.ticks$.pipe(
      map(() => (timer.pause || Date.now()) - timer.start - (timer.idle || 0)),
      map(this.toHMS)
    );
  }

  private toHMS(ms: number): string {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const h = Math.floor(m / 60);
    return `${h.toString().padStart(2, '0')}:${(m % 60)
      .toString()
      .padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;
  }
}
