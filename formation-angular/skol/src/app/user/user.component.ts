import { Component, Input, Output, EventEmitter } from '@angular/core'
import { User } from "../user"


@Component({
  selector: 'sk-user',
  templateUrl: './user.component.html',
  styleUrls: [
    './user.component.css',
  ]
})
export class UserComponent {
  @Input() user: User
  @Output() selected = new EventEmitter

  toggle() {
      this.selected.emit(this.user)
  }
  
}
