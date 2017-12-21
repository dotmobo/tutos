import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerListComponent } from './timer-list/timer-list.component';
import { TimerEditComponent } from './timer-edit/timer-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TimerListComponent
  },
  {
    path: 'timer/new',
    component: TimerEditComponent
  },
  {
    path: 'timer/:id',
    component: TimerEditComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
