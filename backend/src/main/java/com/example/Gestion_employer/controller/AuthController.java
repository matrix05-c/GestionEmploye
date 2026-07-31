package com.example.Gestion_employer.controller;

import com.example.Gestion_employer.Entity.Client;
import com.example.Gestion_employer.repository.Client2Repository;
import com.example.Gestion_employer.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private Client2Repository clientRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {

        String email = body.get("email");
        String password = body.get("password");

        // 1. Chercher le client par email
        Client client = clientRepository.findByEmail(email)
                .orElse(null);

        if (client == null) {
            return ResponseEntity.status(401)
                    .body(Map.of("error", "Email introuvable"));
        }

        // 2. Vérifier le mot de passe
        if (!passwordEncoder.matches(password, client.getPassword())) {
            return ResponseEntity.status(401)
                    .body(Map.of("error", "Mot de passe incorrect"));
        }

        // 3. Générer le token
        String token = jwtService.generateToken(client);

        // 4. Renvoyer le token + infos utiles
        return ResponseEntity.ok(Map.of(
                "token", token,
                "role", client.getRole().name(),
                "nom", client.getNom(),
                "id", client.getId()));
    }
}