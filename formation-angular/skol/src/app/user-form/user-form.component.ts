import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { User } from '../user'

@Component({
    selector: "sk-user-form",
    templateUrl: './user-form.component.html',
    styleUrls: [
        './user-form.component.css',
    ]
})
export class UserFormComponent implements OnChanges {

    @Input() user: User;
    @Output() save = new EventEmitter
    form: FormGroup = new FormGroup({
        name: new FormControl('', [
            Validators.required,
          ]),
        email: new FormControl('', [
            Validators.required,
            Validators.email
          ]),
    });

    ngOnChanges(changes: SimpleChanges) {
        if (changes['user'] && this.user) {
          this.form.patchValue(this.user);
        }
      }


    saveUser() {
        if (this.form.valid) {
            this.save.emit({
                ...this.user,
                ...this.form.value
            })
        }
    }
}