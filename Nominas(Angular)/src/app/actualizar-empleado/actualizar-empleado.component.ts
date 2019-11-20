import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {
  dni: string;
  empleado: Empleado;

  constructor(private route:ActivatedRoute, private router: Router, private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.empleado = new Empleado();
    this.dni = this.route.snapshot.params['dni'];
    this.empleadoService.getEmpleado(this.dni)
      .subscribe(data => {
        this.empleado = data;
      }, error => console.log(error))
  }

  actualizarEmpleado(){
    this.empleadoService.updateEmpleado(this.empleado)
      .subscribe(() => this.iraLista());
  }

  onSubmit(){
    this.actualizarEmpleado();
  }

  iraLista() {
    this.router.navigate(['/empleados'])
      .then(() => {
        window.location.reload();
      });
  }

}
