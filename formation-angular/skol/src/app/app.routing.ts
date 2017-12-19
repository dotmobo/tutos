import { Routes, RouterModule }   from '@angular/router';
import { UserListComponent } from './user-list/user-list.component'
import { HomeComponent } from './home/home.component';

// Configuration des routes
const appRoutes: Routes = [
  {
    path: '', // url (sans / initial)
    component: HomeComponent 
  },
  {
    path: 'users',
    component: UserListComponent
  }
];

// Export du module de routing configuré
export const routing = RouterModule.forRoot(appRoutes);
