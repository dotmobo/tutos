import {
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
  Input,
  Output
} from '@angular/core';
import { Timer } from '../timer';

@Component({
  selector: 'tf-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent {
  @Input() timer: Timer;
  @Output() pause = new EventEmitter();
  @Output() resume = new EventEmitter();
}
