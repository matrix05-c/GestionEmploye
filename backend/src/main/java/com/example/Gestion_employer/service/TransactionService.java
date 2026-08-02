package com.example.Gestion_employer.service;

import org.springframework.beans.factory.annotation.Autowired;
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

    public Transaction depot(String numCompte, long montant) {
        if (montant <= 0) {
            throw new MontantInvalideException("Le montant doit etre superieur a 0");
        }

        Client client = clientRepository.findByNumCompte(numCompte)
                .orElseThrow(() -> new CompteIntrouvableException("Compte Introuvable: " + numCompte));

        if (client.getSolde() < montant) {
            throw new MontantInvalideException("Solde insuffisant");
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
}
