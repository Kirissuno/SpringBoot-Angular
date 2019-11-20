import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { DetallesEmpleadoComponent } from './detalles-empleado/detalles-empleado.component';
import { ListarNominasComponent } from './listar-nominas/listar-nominas.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';


const routes: Routes = [
  {path: '', redirectTo: 'empleado', pathMatch: 'full'},
  {path: 'empleados', component: ListarEmpleadosComponent},
  {path: 'empleados/:dni', component: ActualizarEmpleadoComponent},
  {path: 'alta', component: CrearEmpleadoComponent},
  {path: 'nominas', component: ListarNominasComponent},
  {path: 'nominas/:dni', component: DetallesEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
