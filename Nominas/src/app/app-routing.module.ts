import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';


const routes: Routes = [
  {path: '', redirectTo: 'empleado', pathMatch: 'full'},
  {path: 'empleados', component: ListarEmpleadosComponent},
  {path: 'alta', component: CrearEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
