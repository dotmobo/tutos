import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { reducers, effects, CustomSerializer } from './store';

import { TimerService } from './timer.service';
import { AppComponent } from './app.component';
import { TimerListComponent } from './timer-list/timer-list.component';
import { TimerComponent } from './timer/timer.component';
import { TimerEditComponent } from './timer-edit/timer-edit.component';
import { TimerFormComponent } from './timer-form/timer-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CounterPipe } from './counter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TimerListComponent,
    TimerComponent,
    TimerEditComponent,
    TimerFormComponent,
    CounterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule,
    EffectsModule.forRoot(effects),
    environment.production ? [] : StoreDevtoolsModule.instrument({ maxAge: 10 }) // AFTER STORE
  ],
  providers: [
    TimerService,
    { provide: RouterStateSerializer, useClass: CustomSerializer },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
