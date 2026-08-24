package com.example.Gestion_employer.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Gestion_employer.Entity.Client;
import com.example.Gestion_employer.Entity.Transaction;
import com.example.Gestion_employer.service.ClientService2;
import com.example.Gestion_employer.service.TransactionService;

@RestController
@RequestMapping("client")
public class TransactionController {

    @Autowired
    ClientService2 clientService;

    @Autowired
    private TransactionService transactionService;

    @GetMapping("/allInfoClient")
    public Client getAllInfo(Authentication authentication) {
        String email = authentication.getName();
        return clientService.findByEmail(email);
    }

    @GetMapping("/calculInteret/{numCompte}")
    public Map<String, Object> getInteret(@PathVariable String numCompte) {
        double interet = clientService.calculerInteret(numCompte);

        Client client = clientService.getClientUpdate(numCompte);

        return Map.of(
                "numCompte", numCompte,
                "tauxMensuel", client.getTypeCompte() == Client.TypeCompte.EPARGNE ? "3%" : "0.5%",
                "interetMensuel", interet);
    }

    @PostMapping("/depot")
    public ResponseEntity<?> depot(@RequestBody Map<String, Object> body, Authentication authentication) {

        try {
            // String numCompte = (String) body.get("numCompte");
            long montant = Long.parseLong(body.get("montant").toString());
            String password = (String) body.get("password");
            String email = authentication.getName();

            Transaction t = transactionService.depot(email, montant, password);

            return ResponseEntity.ok(Map.of(
                    "message", "Dépôt effectué avec succès",
                    "montant", t.getMontant(),
                    "soldeApres", t.getSoldeApres()));

        } catch (RuntimeException e) {

            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));

        }

    }

    @PostMapping("/retrait")
    public ResponseEntity<?> retrait(@RequestBody Map<String, Object> body) {

        try {
            String numCompte = (String) body.get("numCompte");

            long montant = Long.parseLong(body.get("montant").toString());

            Transaction t = transactionService.retrait(numCompte, montant);
            return ResponseEntity.ok(Map.of(
                    "message", "Retrait effectué avec succès",
                    "montant", t.getMontant(),
                    "soldeApres", t.getSoldeApres()));

        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/virement")
    public ResponseEntity<?> virement(@RequestBody Map<String, Object> body) {
        try {
            String source = (String) body.get("numCompteSource");
            String dest = (String) body.get("numCompteDestinataire");
            long montant = Long.parseLong(body.get("montant").toString());

            Transaction t = transactionService.virement(source, dest, montant);

            return ResponseEntity.ok(Map.of(
                    "message", "Virement effectué avec succès",
                    "montant", t.getMontant(),
                    "soldeApres", t.getSoldeApres()));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/transactions")
    public List<Transaction> getHistorique(Authentication authentication) {
        String email = authentication.getName();

        return transactionService.getHistorique(email);
    }

}
