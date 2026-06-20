package com.example.Gestion_employer.service;

import java.util.List;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.Gestion_employer.Entity.Client;
import com.example.Gestion_employer.repository.Client2Repository;

@Service
public class ClientService2 {
    @Autowired
    Client2Repository client2Repository;

    public List<Client> getAllClients() {

        return client2Repository.findAll();

    }

    public ResponseEntity<Client> Insert(Client clientInsert) {
        client2Repository.save(clientInsert);

        return ResponseEntity.status(201).body(clientInsert);
    }

    public Client deleteClient(int id) {
        Client clientDeleted = client2Repository.findById(id).orElseThrow();

        client2Repository.deleteById(id);

        return clientDeleted;

    }

    public Client getClientUpdate(int id) {
        return client2Repository.findById(id).orElseThrow();
    }

    public Client updateClient(int id, Client clientUpdate) {
        Client client = client2Repository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        client.setNom(clientUpdate.getNom());
        client.setSolde(clientUpdate.getSolde());

        return client2Repository.save(client);

    }

    public List<Client> searchclient(String find) {

        try {
            Long numCompte = Long.parseLong(find);
            return client2Repository.findByNomContainingOrNumCompte(find, numCompte);

        } catch (Exception e) {
            return client2Repository.findByNomContainingOrNumCompte(find, null);
        }
    }

    public Long countAll() {
        return client2Repository.count();
    }

    public HashMap<String, Long> getDashboard() {

        HashMap<String, Long> dashboard = new HashMap<String, Long>();

        dashboard.put("max", client2Repository.maxSolde());
        dashboard.put("min", client2Repository.minSolde());
        dashboard.put("total", client2Repository.totalSolde());

        return dashboard;

    }
}
