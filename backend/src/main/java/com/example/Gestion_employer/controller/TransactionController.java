package com.example.Gestion_employer.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Gestion_employer.Entity.Client;
import com.example.Gestion_employer.service.ClientService2;

@RestController
@RequestMapping("client")
public class TransactionController {

    @Autowired
    ClientService2 clientService;

    @GetMapping("/allInfoClient")
    public Client getAllInfo(Authentication authentication) {
        String email = authentication.getName();
        return clientService.findByEmail(email);
    }

    @GetMapping("/calculInteret/{numCompte}")
    public Map<String, Object> getInteret(@PathVariable String numCompte) {
        double interet = clientService.calculerInteret(numCompte);

        Client client = clientService.getClientUpdate(numCompte);

        return Map.of(
                "numCompte", numCompte,
                "tauxMensuel", client.getTypeCompte() == Client.TypeCompte.EPARGNE ? "3%" : "0.5%",
                "interetMensuel", interet);
    }
}
