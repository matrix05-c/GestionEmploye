package com.example.Gestion_employer.service;

import com.example.Gestion_employer.Entity.Client;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class JwtService {

    // Clé secrète — minimum 32 caractères pour HS256
    private static final String SECRET = "ma_cle_super_secrete_gestion_bancaire_2024";

    private SecretKey getKey() {
        return Keys.hmacShaKeyFor(SECRET.getBytes());
    }

    // Générer un token pour un client
    public String generateToken(Client client) {
        return Jwts.builder()
                .subject(client.getEmail())
                .claim("role", client.getRole().name())
                .claim("id", client.getId())
                .claim("nom", client.getNom())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 86_400_000)) // 24h
                .signWith(getKey())
                .compact();
    }

    // Extraire l'email depuis le token
    public String extractEmail(String token) {
        return getClaims(token).getSubject();
    }

    // Extraire le rôle depuis le token
    public String extractRole(String token) {
        return getClaims(token).get("role", String.class);
    }

    // Vérifier si le token est valide
    public boolean isTokenValid(String token) {
        try {
            getClaims(token); // lève une exception si invalide ou expiré
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    // Extraire tous les claims
    private Claims getClaims(String token) {
        return Jwts.parser()
                .verifyWith(getKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}