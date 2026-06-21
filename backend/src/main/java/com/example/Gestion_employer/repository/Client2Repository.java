package com.example.Gestion_employer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.Gestion_employer.Entity.Client;

public interface Client2Repository extends JpaRepository<Client, Integer> {

        List<Client> findByNomContainingOrNumCompte(String nom, Long numCompte);

        List<Client> findByNomContaining(String nom);

        List<Client> findByTypeCompte(Client.TypeCompte typeCompte);

        Long countByTypeCompte(Client.TypeCompte typeCompte);

        @Query("""
                        SELECT MIN(c.solde)
                        FROM Client c
                        """)
        Long minSolde();

        @Query("""
                        SELECT MAX(c.solde)
                        FROM Client c
                        """)
        Long maxSolde();

        @Query("""
                        SELECT SUM(c.solde)
                        FROM Client c
                        """)
        Long totalSolde();

}
