import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component'
import { AppComponent } from './app.component';
import { ShowUserPipe, PaginatePipe } from './app.pipe';
import { UserFormComponent } from './user-form/user-form.component'
import { ReactiveFormsModule } from '@angular/forms'
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component'
import { UserListComponent } from './user-list/user-list.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ShowUserPipe,
    PaginatePipe,
    UserFormComponent,
    HomeComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
