package com.example.Gestion_employer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Gestion_employer.service.ClientService2;

import com.example.Gestion_employer.Entity.Client;

@RestController
public class HomeController {

    @Autowired
    private ClientService2 clientService2;

    @PostMapping("/createClient")
    public ResponseEntity<?> createClient(@RequestBody Client client) {

        clientService2.Insert(client);

        return ResponseEntity.ok("Client créé avec succès");
    }

}