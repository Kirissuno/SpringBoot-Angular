package com.robert.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.robert.model.Empleados;

@Repository
public interface EmpleadosRepository extends JpaRepository<Empleados, String> {

}
