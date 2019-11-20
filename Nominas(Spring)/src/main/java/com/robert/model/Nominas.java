package com.robert.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "nominas")
public class Nominas {
	@Id
	private String dni;
	private Integer sueldo;
	
	public Nominas(String dni, Integer sueldo) {
		super();
		this.dni = dni;
		this.sueldo = sueldo;
	}

	public Nominas() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getDni() {
		return dni;
	}

	public void setDni(String dni) {
		this.dni = dni;
	}

	public Integer getSueldo() {
		return sueldo;
	}

	public void setSueldo(Integer sueldo) {
		this.sueldo = sueldo;
	}
	
}
