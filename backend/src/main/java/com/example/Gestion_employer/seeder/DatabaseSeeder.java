package com.example.Gestion_employer.seeder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.example.Gestion_employer.Entity.Client;
import com.example.Gestion_employer.repository.Client2Repository;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    @Autowired
    private Client2Repository clientRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {

        if (clientRepository.count() > 0) {
            System.out.println("⚠️ Déjà seedé !");
            return;
        }

        Client admin = new Client();
        admin.setNom("Admin");
        admin.setEmail("admin@gmail.com");
        admin.setPassword(passwordEncoder.encode("1234"));
        admin.setRole(Client.Role.ADMIN);
        admin.setNumCompte("CPT-00001");
        admin.setSolde(0);
        admin.setTypeCompte(Client.TypeCompte.COURANT);
        clientRepository.save(admin);

        System.out.println("admin cree !");

    }
}
