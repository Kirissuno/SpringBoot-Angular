import { Observable } from "rxjs";
import { EmpleadoService } from "../empleado.service";
import { Empleado } from "../empleado";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {
  empleados: Observable<Empleado[]>;

  constructor(private empleadoService : EmpleadoService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.empleados = this.empleadoService.getListaEmpleados();
  }

  deleteEmpleado(dni: string){
    this.empleadoService.deleteEmpleado(dni)
      .subscribe(
        data=> {
          this.reloadData();
        },
        error => console.log(error));
  }

  detallesEmpleado(dni:String){
    this.router.navigate(['detalles', dni]);
  }

}
