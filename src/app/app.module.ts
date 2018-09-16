import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
// import { UserIdleModule } from "angular-user-idle";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    // UserIdleModule.forRoot({
    //   idle: 2,
    //   timeout: 10,
    //   ping: 0
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
