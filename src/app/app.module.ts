import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PresupuestoModule } from './presupuesto/presupuesto.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PresupuestoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
