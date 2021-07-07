import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';
import { Gasto } from '../../../interfaces/gasto.interface';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent implements OnInit {


  gastoIngresado: boolean = false;
  costoIngresado: boolean = false;

  gastoExcesivo: boolean = false;

  gasto:Gasto = {
    nombreGasto: '',
    costoGasto: 0
  }

  constructor( private presupuestoService: PresupuestoService ) { }

  ngOnInit(): void {
  }

  agregar(){

    if( this.gasto.nombreGasto.trim() === ''){
      this.gastoIngresado = true;
    }else if( this.gasto.costoGasto <= 0 || this.gasto.costoGasto == null ){
      this.costoIngresado = true;
      this.gastoExcesivo = false;
    }else{
      this.gastoIngresado = false;
      this.costoIngresado = false;

      if( this.gasto.costoGasto > this.presupuestoService.restante ){
        this.gastoExcesivo = true;
        return;
      }
      this.gastoExcesivo = false;
      
      this.presupuestoService.agregarGasto( Object.assign({}, this.gasto) );
      this.gasto = {
        nombreGasto: '',
        costoGasto: 0
      }     
    }
    
  }

}
