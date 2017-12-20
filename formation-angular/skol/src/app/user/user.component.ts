import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { switchMap, map  } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'sk-user',
    templateUrl: './user.component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserComponent implements OnInit {
    user$: Observable<User>;
    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        this.user$ = this.route.paramMap.pipe(
            map(paramMap => parseInt(paramMap.get('id'))),
            switchMap(id => this.userService.getUser(id))
        );
    }

    save(user: User) {
        this.waiting = true;
        this.userService.updateUser(user)
        .subscribe(() => {
            this.waiting = false;
            this.router.navigate(['/users']);
        });
    }

    remove(user: User) {
        console.log("JE REMOVE")
        this.userService.removeUser(user)
        .subscribe(() => {
            this.router.navigate(['/users']);
        });
    }
}