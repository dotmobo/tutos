import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component'
import { AppComponent } from './app.component';
import { ShowUserPipe, PaginatePipe } from './app.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ShowUserPipe,
    PaginatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
