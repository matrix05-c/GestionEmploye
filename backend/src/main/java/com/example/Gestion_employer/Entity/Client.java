package com.example.Gestion_employer.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;

@Entity
public class Client {
    @Id
    private Integer numCompte;

    private String nom;

    private long solde;

    public enum TypeCompte {
        COURANT,
        EPARGNE
    }

    @Enumerated(EnumType.STRING)
    private TypeCompte typeCompte;

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

    public void setTypeCompte(TypeCompte typeCompte) {
        this.typeCompte = typeCompte;
    }

    public TypeCompte getTypeCompte() {
        return this.typeCompte;
    }
}
