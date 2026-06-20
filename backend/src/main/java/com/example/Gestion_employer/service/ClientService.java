package com.example.Gestion_employer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Gestion_employer.repository.ClientRepository;
import com.example.Gestion_employer.Entity.ClientEntity;

import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public List<ClientEntity> getAllClients() {

        return clientRepository.findAll();

    }

    public void insertClient(ClientEntity clientInsert) {
        clientRepository.save(clientInsert);
    }

    public void deleteClient(Integer id) {
        clientRepository.deleteById(id);
    }
}
