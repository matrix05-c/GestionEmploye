package com.example.Gestion_employer.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Client {
    @Id
    private Integer numCompte;

    private String nom;

    private long solde;

    public void setNumCompte(Integer numCompte) {

        this.numCompte = numCompte;
    }

    public Integer getNumCompte() {
        return this.numCompte;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getNom() {
        return this.nom;
    }

    public void setSolde(long solde) {
        this.solde = solde;
    }

    public long getSolde() {
        return this.solde;
    }
}
