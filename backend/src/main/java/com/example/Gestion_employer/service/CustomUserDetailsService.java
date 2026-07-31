package com.example.Gestion_employer.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.Gestion_employer.Entity.Client;
import com.example.Gestion_employer.repository.Client2Repository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final Client2Repository repository;

    public CustomUserDetailsService(Client2Repository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {

        Client client = repository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("utilisateur untrouvable"));

        return org.springframework.security.core.userdetails.User
                .withUsername(client.getEmail())
                .password(client.getPassword())
                .authorities(List.of())
                .build();
    }
}
