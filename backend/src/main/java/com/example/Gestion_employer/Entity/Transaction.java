package com.example.Gestion_employer.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;
import java.time.LocalDateTime;

@Entity
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public enum TypeTransaction {
        DEPOT, RETRAIT, VIREMENT, PRET
    }

    @Enumerated(EnumType.STRING)
    private TypeTransaction type;

    private Long montant;
    private Long soldeApres;
    private LocalDateTime dateTransaction;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    private String compteDestinataire;

    @PrePersist
    public void prePersiste() {
        this.dateTransaction = LocalDateTime.now();
    }

    // getters setters
    public Long getId() {
        return id;
    }

    public TypeTransaction getType() {
        return type;
    }

    public void setType(TypeTransaction type) {
        this.type = type;
    }

    public long getMontant() {
        return montant;
    }

    public void setMontant(long montant) {
        this.montant = montant;
    }

    public long getSoldeApres() {
        return soldeApres;
    }

    public void setSoldeApres(long soldeApres) {
        this.soldeApres = soldeApres;
    }

    public LocalDateTime getDateTransaction() {
        return dateTransaction;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public String getCompteDestinataire() {
        return compteDestinataire;
    }

    public void setCompteDestinataire(String compteDestinataire) {
        this.compteDestinataire = compteDestinataire;
    }
}
