import { Pipe, PipeTransform } from	'@angular/core'
import { User } from './user'

@Pipe({
  name: 'showuser',
  // pure: false
})
export class ShowUserPipe implements PipeTransform {
  transform (user: User) {  
      return user.selected ? `[${user.name}]` : user.name
  }
}

@Pipe({
  name: 'paginate',
  // pure: false
})
export class PaginatePipe implements PipeTransform {
  transform (users: User[], page:number=1, nombre:number=2) {  
      return users.slice(page*nombre-nombre, page*nombre)
  }
}