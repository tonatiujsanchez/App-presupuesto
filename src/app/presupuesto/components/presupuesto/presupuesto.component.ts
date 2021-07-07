import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from '../../services/presupuesto.service';


@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {
  cantidadNoValida: boolean= false;
  cantidad!: number;

  constructor( private presupuestoService :PresupuestoService,
                private router: Router ) {
   }

  ngOnInit(): void {
  }

  iniciar(){
    if( this.cantidad <= 0 || this.cantidad == null ){
       this.cantidadNoValida = true;
        return;
    }
    this.cantidadNoValida = false;
    this.presupuestoService.presupuesto = this.cantidad;

    this.router.navigate(['/gastos'])
  }

}
