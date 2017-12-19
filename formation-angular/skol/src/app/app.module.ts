import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component'
import { AppComponent } from './app.component';
import { ShowUserPipe, PaginatePipe } from './app.pipe';
import { UserFormComponent } from './user-form/user-form.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ShowUserPipe,
    PaginatePipe,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
