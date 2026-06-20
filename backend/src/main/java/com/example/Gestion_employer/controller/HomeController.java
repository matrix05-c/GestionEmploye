package com.example.Gestion_employer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.Gestion_employer.service.ClientService;

import java.util.List;

import com.example.Gestion_employer.Entity.ClientEntity;;

@RestController
public class HomeController {

    @Autowired
    private ClientService clientService;

    @GetMapping("/home")
    public List<ClientEntity> home() {

        return clientService.getAllClients();

    }

    @GetMapping("/insert")
    public List<ClientEntity> insert() {
        ClientEntity s = new ClientEntity();

        s.setNom("caddy");
        s.setSolde(1500L);

        clientService.insertClient(s);

        return clientService.getAllClients();

    }

    @GetMapping("/delete/{id}")
    public void delete(@PathVariable Integer id){
    
        clientService.deleteClient(id);
    }
}
