import {
  Component,
  OnInit,
  OnChanges,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Timer } from '../timer';

@Component({
  selector: 'tf-timer-form',
  templateUrl: './timer-form.component.html',
  styleUrls: ['./timer-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerFormComponent implements OnInit, OnChanges {
  @Input() timer: Timer;
  @Output() save = new EventEmitter<Timer>();

  form: FormGroup = new FormGroup({
    title: new FormControl()
  });

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.timer) {
      this.form.patchValue(this.timer);
    }
  }

  submit() {
    if (this.form.valid) {
      this.save.emit({
        ...this.timer,
        ...this.form.value
      });
    }
  }
}
