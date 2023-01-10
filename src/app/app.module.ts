import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DARK_MODE_OPTIONS} from 'angular-dark-mode';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FourzerofourComponent} from './fourzerofour/fourzerofour.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    FourzerofourComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: DARK_MODE_OPTIONS,
      useValue: {
        darkModeClass: 'dark',
        lightModeClass: 'light',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
