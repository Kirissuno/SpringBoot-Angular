import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Nomina } from '../nomina';
import { NominaService } from '../nomina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-nominas',
  templateUrl: './listar-nominas.component.html',
  styleUrls: ['./listar-nominas.component.css']
})
export class ListarNominasComponent implements OnInit {
  nominas: Observable<Nomina[]>;

  constructor(private nominaService: NominaService, private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.nominas = this.nominaService.getListaNominas();
  }

}
