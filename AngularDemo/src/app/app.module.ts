import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProgrammingComponent } from './programming/programming.component';
import { ProgrammingService } from './programming/programming.service';


@NgModule({
  declarations: [
    AppComponent,
    ProgrammingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProgrammingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
