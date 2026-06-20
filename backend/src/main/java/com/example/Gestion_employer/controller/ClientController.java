package com.example.Gestion_employer.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Gestion_employer.Entity.Client;
import com.example.Gestion_employer.service.ClientService2;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

@RestController
public class ClientController {

    @Autowired
    ClientService2 clientService2;

    @GetMapping("/haha2")
    public String haha() {
        return "Hello depuis le 2eme controller";
    }

    @GetMapping("/allClient")
    public List<Client> showClients2() {
        return clientService2.getAllClients();
    }

    @PostMapping("/insert2")
    public ResponseEntity<Client> insertClientTest(@RequestBody Client client) {

        return clientService2.Insert(client);

    }

    @DeleteMapping("/deleteUser/{id}")
    public Client deleteClient(@PathVariable int id) {

        return clientService2.deleteClient(id);

    }

    @GetMapping("/getUpdate/{id}")
    public Client getUpdate(@PathVariable int id) {
        return clientService2.getClientUpdate(id);
    }

    @PutMapping("/updateGo/{id}")
    public Client goUpdate(@PathVariable int id, @RequestBody Client clientUpdate) {

        return clientService2.updateClient(id, clientUpdate);

    }

    @GetMapping("/findClient")
    public List<Client> searClient(@RequestParam String find) {

        return clientService2.searchclient(find);
    }

    @GetMapping("/countAllClient")
    public Long countClient() {
        return clientService2.countAll();
    }

    @GetMapping("/getDashboard")
    public HashMap<String, Long> getdasHboard() {
        return clientService2.getDashboard();
    }

    @GetMapping("/api/test")
    public String test(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            System.out.println(cookie.getName() + " = " + cookie.getValue());
            // Affichera : JSESSIONID = 631B93C9032A1DE6F86D98C4A3634486
        }
        return "test";
    }
}
