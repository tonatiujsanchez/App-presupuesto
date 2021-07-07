import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { GastosComponent } from './components/gastos/gastos.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { GastoComponent } from './components/gastos/gasto/gasto.component';
import { ListaGastosComponent } from './components/gastos/lista-gastos/lista-gastos.component';



@NgModule({
  declarations: [
    GastosComponent,
    PresupuestoComponent,
    GastoComponent,
    ListaGastosComponent
  ],
  exports:[
    GastoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PresupuestoModule { }
