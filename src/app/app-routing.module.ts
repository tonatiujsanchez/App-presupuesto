import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PresupuestoComponent } from './presupuesto/components/presupuesto/presupuesto.component';
import { GastosComponent } from './presupuesto/components/gastos/gastos.component';

const routes: Routes =[
    {
        path: '',
        redirectTo: 'presupuesto',
        pathMatch: 'full'
    },
    {
        path: 'presupuesto',
        component: PresupuestoComponent
    },
    {
        path: 'gastos',
        component: GastosComponent
    },
    {
        path: '**',
        redirectTo:'presupuesto',
        pathMatch: 'full'
    }

];


@NgModule({
    imports:[
        RouterModule.forRoot( routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}