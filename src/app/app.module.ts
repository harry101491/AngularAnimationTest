import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { HeroBasicComponent } from './components/hero-basic/hero-basic.component';

import { HeroService } from "./service/hero.service";


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeroBasicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
