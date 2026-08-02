package com.example.Gestion_employer.config;

import com.example.Gestion_employer.filter.JwtFilter;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

        @Autowired
        private JwtFilter jwtFilter;

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http)
                        throws Exception {

                return http
                                // 1. Désactiver CSRF (API REST stateless)
                                .csrf(csrf -> csrf.disable())

                                // 2. CORS
                                .cors(cors -> cors.configurationSource(corsConfiguration()))

                                // 3. Pas de session — on est 100% stateless avec JWT
                                .sessionManagement(session -> session
                                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))

                                // 4. Règles d'accès
                                .authorizeHttpRequests(auth -> auth

                                                // Routes publiques (pas besoin d'être connecté)
                                                .requestMatchers("/auth/login").permitAll()

                                                // Routes réservées à l'ADMIN
                                                .requestMatchers("/admin/**").hasRole("ADMIN")

                                                // Routes réservées au CLIENT
                                                .requestMatchers("/client/**").hasRole("USER")

                                                // Tout le reste : authentifié (peu importe le rôle)
                                                .anyRequest().authenticated())

                                // 5. Gestion des erreurs
                                .exceptionHandling(ex -> ex

                                                // 401 — pas de token ou token invalide
                                                .authenticationEntryPoint((request, response, e) -> {
                                                        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                                                        response.setContentType("application/json");
                                                        response.getWriter().write(
                                                                        "{\"error\": \"Non authentifié — token manquant ou invalide\"}");
                                                })

                                                // 403 — connecté mais pas le bon rôle
                                                .accessDeniedHandler((request, response, e) -> {
                                                        response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                                                        response.setContentType("application/json");
                                                        response.getWriter().write(
                                                                        "{\"error\": \"Accès refusé — vous n'avez pas les droits\"}");
                                                }))

                                // 6. Insérer notre JwtFilter AVANT le filtre d'auth classique
                                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)

                                .build();
        }

        @Bean
        public CorsConfigurationSource corsConfiguration() {
                CorsConfiguration configuration = new CorsConfiguration();

                configuration.setAllowedOrigins(List.of(
                                "http://localhost:5173",
                                "http://localhost:3000"));
                configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
                configuration.setAllowedHeaders(List.of("*"));
                configuration.setAllowCredentials(true);

                UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
                source.registerCorsConfiguration("/**", configuration);

                return source;
        }
}

// package com.example.Gestion_employer.config;

// import java.util.List;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import
// org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import
// org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.web.SecurityFilterChain;
// import org.springframework.web.cors.CorsConfiguration;
// import org.springframework.web.cors.CorsConfigurationSource;
// import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

// import jakarta.servlet.http.HttpServletResponse;

// @Configuration
// @EnableWebSecurity

// // Spring Security configure automatiquement :
// // ✅ HttpOnly: true (par défaut)
// // ✅ Secure: false (par défaut, car localhost = http)
// // ✅ Path: / (par défaut)
// // ✅ Gestion de session complète

// public class SecurityConfig {

// @Bean
// public SecurityFilterChain securityFilterChain(HttpSecurity http)
// throws Exception {

// return http.csrf(csrf -> csrf.disable())
// .cors(cors -> cors.configurationSource(corsConfiguration()))
// .authorizeHttpRequests(auth -> auth.anyRequest().authenticated())
// .formLogin(form -> form
// .usernameParameter("email")
// .successHandler((request, response, authentication) -> {
// response.setStatus(HttpServletResponse.SC_OK);
// })
// .failureHandler((request, response, exception) -> {
// response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
// })
// .permitAll())
// .build();
// }

// @Bean
// public CorsConfigurationSource corsConfiguration() {
// CorsConfiguration configuration = new CorsConfiguration();

// configuration.setAllowedOrigins(List.of(
// "http://localhost:5173",
// "http://localhost:3000"));

// configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
// configuration.setAllowedHeaders(List.of("*"));
// configuration.setAllowCredentials(true);

// UrlBasedCorsConfigurationSource source = new
// UrlBasedCorsConfigurationSource();
// source.registerCorsConfiguration("/**", configuration);

// return source;
// }
// }
