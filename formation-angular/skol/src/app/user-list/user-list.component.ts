import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'sk-user-list',
  templateUrl: './user-list.component.html',
  styles: [],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  users: Array<User> = [];
  editedUser: User | null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users =>
      this.users = users
    );
  }

  edit(user: User) {
    this.editedUser = user;
  }

  save(user: User) {
    this.editedUser = null;
    let index = this.users.findIndex(u => u.id === user.id);
    if (index === -1) {
      index = this.users.length;
    }
    this.updateUser(user, index);
  }

  private updateUser(user, index) {
    this.users = [
      ...this.users.slice(0, index),
      user,
      ...this.users.slice(index + 1)
    ];
  }
}
