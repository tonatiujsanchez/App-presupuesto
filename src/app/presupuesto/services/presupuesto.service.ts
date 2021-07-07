import { Injectable } from '@angular/core';
import { Gasto } from '../interfaces/gasto.interface';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  presupuesto: number = 0;
  restante: number = 0;
  private gastos: Gasto[] = [];

  get allGastos() {
    return this.gastos;
  }

  constructor() { }

  agregarGasto( gasto: Gasto ){
    this.restante -= gasto.costoGasto;
    this.gastos.push( gasto );
  }
  eliminarGasto( idx: number ){
    this.restante += this.gastos[idx].costoGasto;
    this.gastos.splice( idx, 1 );
  }
}
