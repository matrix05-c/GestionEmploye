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

        Client caddy1 = new Client();
        caddy1.setNom("caddy1");
        caddy1.setEmail("caddy1@gmail.com");
        caddy1.setPassword(passwordEncoder.encode("caddy1"));
        caddy1.setRole(Client.Role.USER);
        caddy1.setNumCompte("CPT-00002");
        caddy1.setSolde(700);
        caddy1.setTypeCompte(Client.TypeCompte.COURANT);
        clientRepository.save(caddy1);

         Client caddy2 = new Client();
        caddy2.setNom("caddy2");
        caddy2.setEmail("caddy2@gmail.com");
        caddy2.setPassword(passwordEncoder.encode("caddy2"));
        caddy2.setRole(Client.Role.USER);
        caddy2.setNumCompte("CPT-00003");
        caddy2.setSolde(200);
        caddy2.setTypeCompte(Client.TypeCompte.EPARGNE);
        clientRepository.save(caddy2);

        System.out.println("admin cree !");

    }
}
