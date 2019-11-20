package com.robert.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robert.exception.ResourceNotFoundException;
import com.robert.model.Empleados;
import com.robert.model.Nominas;
import com.robert.repository.EmpleadosRepository;
import com.robert.repository.NominasRepository;

@Service
public class EmpleadosServiceImpl implements EmpleadosService {
	@Autowired
	private EmpleadosRepository emprepo;
	@Autowired
	private NominasRepository nomrepo;

	@Override
	public List<Empleados> findAll() {
		return emprepo.findAll();
	}

	@Override
	public Empleados findByDni(String dni) {
		return emprepo.findById(dni).orElseThrow(() -> new ResourceNotFoundException("Empleado con DNI: "+ dni +" no existe"));
	}

	@Override
	public void createNewEmp(Empleados empleado) {
		if(emprepo.findById(empleado.getDni()).isPresent()) {
			throw new ResourceNotFoundException("Empleado con DNI "+ empleado.getDni() + " ya existe en la base de datos");
		}else {
			emprepo.save(empleado);
			nomrepo.save(new Nominas(empleado.getDni(), NominasServiceImpl.sueldo(empleado)));
		}
	}

	@Override
	public void updateEmp(Empleados empleado) {
		Optional<Empleados> empleadoBD = emprepo.findById(empleado.getDni());
		Optional<Nominas> nominaBD = nomrepo.findById(empleadoBD.get().getDni());

		if(empleadoBD.isPresent()) {
			Empleados empleadoUpdate = empleadoBD.get();
			Nominas nom = nominaBD.get();
			empleadoUpdate.setDni(empleado.getDni());
			empleadoUpdate.setNombre(empleado.getNombre());
			empleadoUpdate.setSexo(empleado.getSexo());
			if(empleadoBD.get().getCategoria() != empleado.getCategoria() || empleadoBD.get().getAnyos() != empleado.getCategoria()) {
				empleadoUpdate.setCategoria(empleado.getCategoria());
				empleadoUpdate.setAnyos(empleado.getAnyos());
				nom.setDni(empleado.getDni());
				nom.setSueldo(NominasServiceImpl.sueldo(empleado));
			}
			emprepo.save(empleadoUpdate);
			nomrepo.save(nom);
		}else {
			throw new ResourceNotFoundException("Empleado con DNI : "+empleado.getDni() +" inexistente");
		}
	}

	@Override
	public void deleteByDni(String dni) {
		if(emprepo.findById(dni).isPresent()){
			emprepo.delete(findByDni(dni));
		}else {
			throw new ResourceNotFoundException("El empleado a borrar no existe");
		}
	}

}
