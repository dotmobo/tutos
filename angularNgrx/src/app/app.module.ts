
import {BrowserModule} from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { counterReducer } from './counter'
import { MyAppComponent } from './app.component'

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer })
  ],
  declarations: [ MyAppComponent ],
  bootstrap: [ MyAppComponent ]
})
export class AppModule {}