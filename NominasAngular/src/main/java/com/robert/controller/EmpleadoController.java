package com.robert.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.robert.exception.ResourceNotFoundException;
import com.robert.model.Empleados;
import com.robert.repository.EmpleadosRepository;
import com.robert.service.EmpleadosService;
import com.robert.service.NominasService;

@RestController
@RequestMapping("/")
public class EmpleadoController {
	
	@Autowired
	EmpleadosService empService;
	@Autowired
	NominasService nomService;
	
	@GetMapping("/empleados")
	public List<Empleados> getAll(){
		return empService.findAll();
	}
	
	@GetMapping("/empleados/{dni}")
	public Empleados getEmpleadoByDni(@PathVariable String dni) {
		return empService.findByDni(dni);
	}
	
	@PostMapping("/empleados")
	public void newEmpleado(@RequestBody Empleados empleado) {
		empService.createNewEmp(empleado);
		nomService.updateSueldo(empleado);
	}
	
	@DeleteMapping("/empleados/{dni}")
	public void deleteEmp(@PathVariable String dni) {
		empService.deleteByDni(dni);
		nomService.deleteNomina(dni);
	}
	
	@PatchMapping("/empleados")
	public void updateEmp(@RequestBody Empleados empleado) {
		empService.updateEmp(empleado);
		nomService.updateSueldo(empleado);
	}

}
