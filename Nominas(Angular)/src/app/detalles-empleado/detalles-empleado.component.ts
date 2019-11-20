import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { Nomina } from '../nomina';
import { NominaService } from '../nomina.service';

@Component({
  selector: 'app-detalles-empleado',
  templateUrl: './detalles-empleado.component.html',
  styleUrls: ['./detalles-empleado.component.css']
})
export class DetallesEmpleadoComponent implements OnInit {

  dni: String;
  nomina :Nomina;
  empleado:Empleado;

  constructor(private router:Router, private route: ActivatedRoute, private nominaService : NominaService) { }

  ngOnInit() {
    this.nomina = new Nomina();
    this.dni = this.route.snapshot.params['dni'];
    this.nominaService.getNomina(this.dni)
      .subscribe(data=>{
        console.log(data)
        this.nomina = data;
      }, error => console.log(error));
  }

  lista(){
    this.router.navigate(['empleados']);
  }

}
