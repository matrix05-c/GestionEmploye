package com.example.Gestion_employer.service;

import java.util.List;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Gestion_employer.Entity.Client;
import com.example.Gestion_employer.repository.Client2Repository;




@Service
public class ClientService2 {
    @Autowired
    private Client2Repository client2Repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<Client> getAllClients() {

        return client2Repository.findAll();

    }

    public List<Client> getAllClientByTypeCount(Client.TypeCompte type) {
        return client2Repository.findByTypeCompte(type);
    }

    public ResponseEntity<Client> Insert(Client clientInsert) {

        Client nouveauClient = client2Repository.save(clientInsert);

        String numCompte = String.format("CPT-%05d", nouveauClient.getId());
        nouveauClient.setNumCompte(numCompte);

        String passwordHasse = passwordEncoder.encode(nouveauClient.getPassword());
        nouveauClient.setPassword(passwordHasse);

        nouveauClient.setRole(Client.Role.USER);

        client2Repository.save(nouveauClient);

        return ResponseEntity.status(201).body(clientInsert);
    }

    public Client deleteClient(int id) {
        Client clientDeleted = client2Repository.findById(id).orElseThrow();

        client2Repository.deleteById(id);

        return clientDeleted;

    }

    public Client getClientUpdate(String numCompte) {
        return client2Repository.findByNumCompte(numCompte).orElseThrow();
    }

    public Client updateClient(String id, Client clientUpdate) {
        Client client = client2Repository.findByNumCompte(id)
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

    public Long countAllByType(Client.TypeCompte typeCompte) {
        return client2Repository.countByTypeCompte(typeCompte);
    }

    public HashMap<String, Long> getDashboard() {

        HashMap<String, Long> dashboard = new HashMap<String, Long>();

        dashboard.put("max", client2Repository.maxSolde());
        dashboard.put("min", client2Repository.minSolde());
        dashboard.put("total", client2Repository.totalSolde());

        return dashboard;

    }

    public Client findByEmail(String email) {
        return client2Repository.findByEmail(email).orElseThrow();
    }

    public double calculerInteret(String numCompte) {
        Client client = client2Repository.findByNumCompte(numCompte)
                .orElseThrow(() -> new RuntimeException("Client non trouvé"));

        double taux = switch (client.getTypeCompte()) {
            case EPARGNE -> 0.03;
            case COURANT -> 0.005;
        };

        return client.getSolde() * taux;
    }

}
