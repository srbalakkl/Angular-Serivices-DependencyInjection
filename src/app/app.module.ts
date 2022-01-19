import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PrimaryComponent} from './primary/primary.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryComponent
  ],
  imports: [
    BrowserModule
  ],
  //Registering EmployeeService to access it from anywhere.
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
