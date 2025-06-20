// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Import the NavbarComponent directly
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    // ✅ Declare it here
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
