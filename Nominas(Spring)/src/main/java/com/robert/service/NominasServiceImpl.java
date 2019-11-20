package com.robert.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robert.exception.ResourceNotFoundException;
import com.robert.model.Empleados;
import com.robert.model.Nominas;
import com.robert.repository.NominasRepository;

@Service
public class NominasServiceImpl implements NominasService {
	@Autowired
	private NominasRepository nomrepo;

	@Override
	public List<Nominas> getAll() {
		return nomrepo.findAll();
	}

	@Override
	public Nominas getSpec(String dni) {
		return nomrepo.findById(dni).orElseThrow(() -> new ResourceNotFoundException("Nomina especificada inexistente"));
	}

	@Override
	public void updateSueldo(Empleados emp) {
		Optional<Nominas> nominaBD = this.nomrepo.findById(emp.getDni());
		if(nominaBD.isPresent()) {
			Nominas nominaUpdate = nominaBD.get();
			nominaUpdate.setDni(emp.getDni());;
			nominaUpdate.setSueldo(sueldo(emp));
			nomrepo.save(nominaUpdate);
		}else {
			throw new ResourceNotFoundException("Nomina a actualizar inexistente");
		}
	}

	@Override
	public void deleteNomina(String dni) {
		nomrepo.delete(getSpec(dni));
	}
	
	private static final int SUELDO_BASE[] = 
		{50000, 70000, 90000, 110000, 130000, 150000, 170000, 190000, 210000, 230000};
	
	public static int sueldo (Empleados emp) {
		return SUELDO_BASE[emp.getCategoria()-1]+5000*emp.getAnyos();
	}

}
