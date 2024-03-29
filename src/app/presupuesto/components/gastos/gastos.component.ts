import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from '../../services/presupuesto.service';
import { Gasto } from '../../interfaces/gasto.interface';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  constructor( private presupuestoService: PresupuestoService,
                private router: Router ) { }

  ngOnInit(): void {
    if( this.presupuestoService.presupuesto === 0 ){
      this.router.navigate(['/presupuesto']);
    }
  }

}
