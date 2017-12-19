import { Component } from '@angular/core';
import { User } from "../user"

@Component({
  // selector: 'sk-user-list',
  templateUrl: './user-list.component.html',
  styles: [
  ]
})
export class UserListComponent {

  page:number = 1

  users: User[] = [
    {id: "1", name: "John Doe", email: "john.doe@noreply.com", selected:true},
    {id: "2", name: "Jane Doe", email: "jane.doe@noreply.com"},
    {id: "3", name: "Pierre Doe", email: "pierre.doe@noreply.com"},
    {id: "4", name: "Paul Doe", email: "jane.doe@noreply.com"},
    {id: "5", name: "Henry Doe", email: "jane.doe@noreply.com"},
    {id: "6", name: "Morgan Doe", email: "jane.doe@noreply.com"},
    {id: "7", name: "John Doe", email: "jane.doe@noreply.com"},
    {id: "8", name: "Pierre Doe", email: "jane.doe@noreply.com"},
    {id: "9", name: "Jane Doe", email: "jane.doe@noreply.com"},
    {id: "10", name: "Jane Doe", email: "jane.doe@noreply.com"},
    {id: "11", name: "John Doe", email: "jane.doe@noreply.com"},
  ]

  nextPage() {
    this.page = this.page + 1
  }

  previousPage() {
    this.page = this.page > 1 ? this.page - 1 : 1
  }


  save(user:User) {
    this.users = this.users.map(
      (u, j) => u.id === user.id
        ? {
          ...user,
        }
        : { ...u, }
    )
  }



  


  changeSelected(i:number, user:User) {
    user.selected = !user.selected
    // pour que le pip fonctionne en mode pure, il faut réassigner l'adresse de l'objet user pour qu'il capte une modification
    // this.users[i] = {
    //   ...this.users[i],
    //   !user.selected
    // }

    this.users = this.users.map(
      (u, j) => i === j
        ? {
          ...u,
        }
        : { ...u, }
    )


  }
}
