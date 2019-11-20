package com.robert.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.robert.model.Empleados;

@Service
public interface EmpleadosService {
	public List<Empleados> findAll();
	public Empleados findByDni(String dni);
	public void createNewEmp(Empleados empleado);
	public void deleteByDni(String dni);
	public void updateEmp(Empleados empleado);
}
