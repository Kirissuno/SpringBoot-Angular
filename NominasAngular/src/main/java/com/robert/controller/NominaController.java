package com.robert.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.robert.model.Nominas;
import com.robert.service.NominasService;

@RestController
@RequestMapping("/")
public class NominaController {
	
	@Autowired
	NominasService nomService;
	
	@GetMapping("/nominas")
	public List<Nominas> getAll(){
		return nomService.getAll();
	}
	
	@GetMapping("/nominas/{dni}")
	public Nominas getNomByDni(@PathVariable String dni) {
		return nomService.getSpec(dni);
	}
}
