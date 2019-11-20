package com.robert.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="empleados")
public class Empleados {
	
	@Id
	private String dni;
	private String nombre;
	private String sexo;
	private Integer categoria;
	private Integer anyos;
	
	public Empleados(String dni, String nombre, String sexo, Integer categoria, Integer anyos) {
		super();
		this.dni = dni;
		this.nombre = nombre;
		this.sexo = sexo;
		this.categoria = categoria;
		this.anyos = anyos;
	}

	public Empleados() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getDni() {
		return dni;
	}

	public void setDni(String dni) {
		this.dni = dni;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public Integer getCategoria() {
		return categoria;
	}

	public void setCategoria(Integer categoria) {
		this.categoria = categoria;
	}

	public Integer getAnyos() {
		return anyos;
	}

	public void setAnyos(Integer anyos) {
		this.anyos = anyos;
	}

}
