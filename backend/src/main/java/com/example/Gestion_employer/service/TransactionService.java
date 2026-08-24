package com.example.Gestion_employer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Gestion_employer.repository.TransactionRepository;
import com.example.Gestion_employer.Entity.Transaction;
import com.example.Gestion_employer.Entity.Client;
import com.example.Gestion_employer.Exception.CompteIntrouvableException;
import com.example.Gestion_employer.Exception.MontantInvalideException;
import com.example.Gestion_employer.repository.Client2Repository;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private Client2Repository clientRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Transaction depot(String email, long montant, String password) {

        if (montant <= 0) {
            throw new MontantInvalideException("Le montant doit etre superieur a 0");
        }

        Client client = clientRepository.findByEmail(email)
                .orElseThrow(() -> new CompteIntrouvableException("Compte Introuvable: "));

        if (client.getSolde() < montant) {
            throw new MontantInvalideException("Solde insuffisant");
        }

        if (!passwordEncoder.matches(password, client.getPassword())) {
            throw new RuntimeException("Mot de passe incorrect");
        }

        long nouveauSolde = client.getSolde() - montant;
        client.setSolde(nouveauSolde);
        clientRepository.save(client);

        Transaction transaction = new Transaction();
        transaction.setClient(client);
        transaction.setType(Transaction.TypeTransaction.RETRAIT);
        transaction.setMontant(montant);
        transaction.setSoldeApres(nouveauSolde);

        return transactionRepository.save(transaction);
    }

    public Transaction retrait(String numCompte, long montant) {
        if (montant <= 0) {
            throw new RuntimeException("Le montant doit être supérieur à 0");
        }

        Client client = clientRepository.findByNumCompte(numCompte)
                .orElseThrow(() -> new RuntimeException("Compte introuvable: " + numCompte));

        if (client.getSolde() < montant) {
            throw new RuntimeException("Solde insuffisant");
        }

        // if (client.getTypeCompte() == Client.TypeCompte.EPARGNE) {
        // throw new RuntimeException("")
        // }

        long nouveauSolde = client.getSolde() - montant;
        client.setSolde(nouveauSolde);
        clientRepository.save(client);

        Transaction transaction = new Transaction();
        transaction.setClient(client);
        transaction.setType(Transaction.TypeTransaction.RETRAIT);
        transaction.setMontant(montant);
        transaction.setSoldeApres(nouveauSolde);

        return transactionRepository.save(transaction);
    }

    public Transaction virement(String numCompteSource, String numCompteDestinataire, long montant) {

        if (montant <= 0) {
            throw new RuntimeException("Le montant doit être supérieur à 0");
        }

        if (numCompteSource.equals(numCompteDestinataire)) {
            throw new RuntimeException("Impossible de realiser un virement vers le même compte");
        }

        // Récupérer les deux clients
        Client compteSource = clientRepository.findByNumCompte(numCompteSource)
                .orElseThrow(() -> new RuntimeException("Compte source introuvable"));

        Client compteDestinataire = clientRepository.findByNumCompte(numCompteDestinataire)
                .orElseThrow(() -> new RuntimeException("Compte destinataire introuvable"));

        if (compteSource.getSolde() < montant) {
            throw new RuntimeException("Solde insuffisant");
        }

        compteSource.setSolde(compteSource.getSolde() - montant);
        compteDestinataire.setSolde(compteDestinataire.getSolde() + montant);
        clientRepository.save(compteSource);
        clientRepository.save(compteDestinataire);

        Transaction transaction = new Transaction();
        transaction.setClient(compteSource);
        transaction.setType(Transaction.TypeTransaction.VIREMENT);
        transaction.setMontant(montant);
        transaction.setSoldeApres(compteSource.getSolde());
        transaction.setCompteDestinataire(numCompteDestinataire);

        return transactionRepository.save(transaction);

    }

    // HISTORIQUE d'un client
    public java.util.List<Transaction> getHistorique(String email) {
        return transactionRepository.findByClient_Email(email);
    }
}
