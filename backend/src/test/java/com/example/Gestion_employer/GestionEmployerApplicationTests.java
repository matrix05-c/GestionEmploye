package com.example.Gestion_employer;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.Gestion_employer.Entity.User;
import com.example.Gestion_employer.repository.UserRepository;

@SpringBootTest
class GestionEmployerApplicationTests {

	@Autowired
	private UserRepository userRepository;

	@Test
	void contextLoads() {
		User newuser = new User();
		newuser.setEmail("caddyrasolonjatovo@gmail.com");
		newuser.setPassword("1234");

		userRepository.save(newuser);

		System.out.println("User cree avec Id: " + newuser.getId());
	}

}
