import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from './empleado.service';
import { DetallesEmpleadoComponent } from './detalles-empleado/detalles-empleado.component';
import { ListarNominasComponent } from './listar-nominas/listar-nominas.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarEmpleadosComponent,
    CrearEmpleadoComponent,
    DetallesEmpleadoComponent,
    ListarNominasComponent,
    ActualizarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
