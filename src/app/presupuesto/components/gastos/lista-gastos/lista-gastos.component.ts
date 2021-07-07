import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';
import { Gasto } from '../../../interfaces/gasto.interface';

@Component({
  selector: 'app-lista-gastos',
  templateUrl: './lista-gastos.component.html',
  styleUrls: ['./lista-gastos.component.css']
})
export class ListaGastosComponent implements OnInit {

  gastos: Gasto[] = [];
  presupuesto: number = 0;
  restante: number = 0;
  gastoActivo: string = '';

  constructor( public presupuestoService: PresupuestoService ) {

    this.gastos = this.presupuestoService.allGastos;
 
    this.presupuesto = this.presupuestoService.presupuesto;
    this.restante = this.presupuestoService.restante;
   }

  ngOnInit(): void {
  }
  
  get classRestante(){
    return {
      'alert-success': this.presupuestoService.restante > this.porcentaje50,
      'alert-warning': this.presupuestoService.restante <= this.porcentaje50,
      'alert-danger': this.presupuestoService.restante <= this.porcentaje25
    }
  } 

 // Formula: (porcentaje * cantidad) / 100 
  get porcentaje50(): number{
    return (50 * this.presupuesto) / 100;
  }
  get porcentaje25(): number{
    return (25 * this.presupuesto) / 100;
  }
 
  activarGasto( gastoNombre: string ){
    this.gastoActivo = gastoNombre;

  }
  getClassIcono( gasto: Gasto ){
    return this.gastoActivo === gasto.nombreGasto ? 'text-secondary' : 'transparente';
  }

  eliminarGasto( idx: number ){
    this.presupuestoService.eliminarGasto( idx );
  }

}
