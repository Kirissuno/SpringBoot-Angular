import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {
  empleado: Empleado;

  constructor(private empleadoService: EmpleadoService, private router: Router) {
    this.empleado = new Empleado();
   }

  ngOnInit() {
  }

  save() {
    this.empleadoService.crearEmpleado(this.empleado)
      .subscribe(() => this.iraLista());
  }

  onSubmit() {
    this.save();
  }

  iraLista() {
    this.router.navigate(['/empleados'])
      .then(() => {
        window.location.reload();
      });
  }

}
