#Gestion Employe App

# 🏦 Gestion de Comptes Bancaires

Application web de gestion de comptes bancaires développée avec **Spring Boot** pour le back-end et **React** pour le front-end.

L'application permet aux clients d'effectuer des opérations bancaires et aux administrateurs de gérer les comptes clients.

## ✨ Fonctionnalités

### 👤 Espace Client

- Connexion et déconnexion
- Consultation des informations du compte
- Consultation du solde disponible
- Dépôt
- Retrait
- Virement vers un autre compte
- Consultation de l'historique des transactions
- Visualisation de l'évolution du solde sous forme de graphique
- Calcul des intérêts mensuels

### 👨‍💼 Espace Administrateur

- Consultation des clients
- Recherche de clients
- Filtrage par type de compte
- Ajout d'un client
- Modification d'un client
- Suppression d'un client
- Consultation des soldes
- Statistiques sur les clients

---

# 🛠️ Technologies utilisées

## 🔙 Back-end

### ☕ Java

**Java** est le langage utilisé pour développer toute la partie serveur de l'application.

Il est utilisé pour :
- créer les entités métier ;
- développer les services ;
- créer les contrôleurs REST ;
- gérer les exceptions ;
- implémenter la logique des transactions.

### 🌱 Spring Boot

**Spring Boot** permet de développer et d'exécuter rapidement l'application serveur.

Il est utilisé pour :
- créer l'API REST ;
- gérer les contrôleurs ;
- gérer les services ;
- configurer l'application ;
- connecter les différents composants du projet.

### 🔐 Spring Security

**Spring Security** assure la sécurité de l'application.

Il permet notamment de :
- authentifier les utilisateurs ;
- gérer les rôles `USER` et `ADMIN` ;
- protéger les endpoints ;
- autoriser ou refuser l'accès selon le rôle.

Exemple :

```java
.requestMatchers("/admin/**").hasRole("ADMIN")
.requestMatchers("/client/**").hasRole("USER")

###🔑 JWT (JSON Web Token)
Les JWT sont utilisés pour l'authentification.

Après la connexion, le serveur génère un token JWT qui est ensuite envoyé par le front-end dans les requêtes protégées :

###🗃️ Spring Data JPA

Spring Data JPA facilite l'accès à la base de données.

Il permet de :

créer les repositories ;
effectuer les opérations CRUD ;
rechercher les clients et transactions ;
communiquer avec la base de données à travers les entités Java.

###Hibernate

Hibernate est utilisé comme implémentation JPA pour faire le mapping entre les classes Java et les tables de la base de données.

📦 Maven

Maven est utilisé pour :

gérer les dépendances Java ;
compiler le projet ;
exécuter l'application ;
gérer le cycle de construction du projet.

L'application peut être lancée avec :

./mvnw spring-boot:run

#####Frontend 
react, bootstrap,Recharts, SweetAlert2, BootstarpIcone


🚀 Installation et lancement
Prérequis
Java 17+
Maven
Node.js et npm
Une base de données (MySQL/PostgreSQL) configurée dans application.properties(dans le backend)

#Back-end
cd backend
./mvn clean install
./mvnw spring-boot:run

#Front-end
cd frontend
npm install
npm run dev