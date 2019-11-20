package com.robert.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.robert.model.Empleados;
import com.robert.model.Nominas;

@Service
public interface NominasService {
	public List<Nominas> getAll();
	public Nominas getSpec(String dni);
	public void updateSueldo(Empleados emp);
	public void deleteNomina(String dni);
}
