package com.robert.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.robert.model.Nominas;

@Repository
public interface NominasRepository extends JpaRepository<Nominas, String> {

}
