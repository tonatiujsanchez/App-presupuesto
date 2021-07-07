import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent implements OnInit {
  gastoIngresado: boolean = false;
  costoIngresado: boolean = false;

  gastoExcesivo: boolean = false;

  nombreGasto: string = '';
  costoGasto!: number; 

  constructor( private presupuestoService: PresupuestoService ) { }

  ngOnInit(): void {
  }

  agregar(){

    if( this.nombreGasto.trim() === ''){
      this.gastoIngresado = true;
    }else if( this.costoGasto <= 0 || this.costoGasto == null ){
      this.costoIngresado = true;
      this.gastoExcesivo = false;
    }else{
      this.gastoIngresado = false;
      this.costoIngresado = false;

      if( this.costoGasto > this.presupuestoService.presupuesto ){
        this.gastoExcesivo = true;
        return;
      }
      this.gastoExcesivo = false;
      console.log('Gasto agregado.');
      
    }
    
  }

}
