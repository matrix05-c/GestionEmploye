package com.example.Gestion_employer.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;;

    private String password;

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return this.email;

    }

    public void setPassword(String password) {
        this.password = password;

    }

    public String getPassword() {
        return this.password;
    }

    public Long getId() {
        return this.id;
    }

}