import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { User } from '../user';

function speValidator(control: AbstractControl): { [s: string]: boolean } {
  if (control.value && !control.value.match(/^123/)) {
    return { invalidSpe: true };
  }
}

@Component({
  selector: 'sk-user-form',
  templateUrl: './user-form.component.html',
  styles: [
    `
    label.error {
      color: red;
    }
  `
  ]
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() user: User;
  @Output() save = new EventEmitter<User>();
  @Output() remove = new EventEmitter<User>();

  form: FormGroup = new FormGroup({
    name: new FormControl('', speValidator),
    email: new FormControl()
  });

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user'] && this.user) {
      this.form.patchValue(this.user);
    }
  }

  submit() {
    console.log("submit")
    // if (this.form.invalid) {
    //   return;
    // }
    this.save.emit({
      ...this.user,
      ...this.form.value
    });
  }

  cancel() {
    // this.cancel.emit();
    // this.form.reset();
  }


  removeUser() {
    this.remove.emit({
      ...this.user
    });
  }

}
