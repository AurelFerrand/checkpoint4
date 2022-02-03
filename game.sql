-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : jeu. 27 jan. 2022 à 18:52
-- Version du serveur :  8.0.27-0ubuntu0.20.04.1
-- Version de PHP : 7.4.3
SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET
  AUTOCOMMIT = 0;
START TRANSACTION;
SET
  time_zone = "+00:00";
  /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
  /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
  /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
  /*!40101 SET NAMES utf8mb4 */;
--
  -- Base de données : `data_game`
  --
  -- --------------------------------------------------------
  --
  -- Structure de la table `game`
  --
  CREATE TABLE `game` (
    `id` int NOT NULL,
    `name` varchar(255) NOT NULL,
    `slug_id` int NOT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;
-- --------------------------------------------------------
  -- --------------------------------------------------------
  --
  -- Structure de la table `user`
  --
  CREATE TABLE `user` (
    `id` int NOT NULL,
    `email` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `is_admin` tinyint NOT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;
--
  -- Déchargement des données de la table `user`
  --
INSERT INTO
  `user` (`id`, `email`, `password`, `is_admin`)
VALUES
  (
    1,
    'plop@plop.com',
    '$2a$10$dif/azt2T4SdMNzmIbvKJ.2BolQOD3aB3QE.jVRswuVY50jGMhaZS',
    1
  );
--
  -- Index pour la table `game`
  --
ALTER TABLE
  `game`
ADD
  PRIMARY KEY (`id`);
-- Index pour la table `user`
  --
ALTER TABLE
  `user`
ADD
  PRIMARY KEY (`id`);
--
  -- AUTO_INCREMENT pour les tables déchargées
  --
  --
ALTER TABLE
  `game`
MODIFY
  `id` int NOT NULL AUTO_INCREMENT;
--
ALTER TABLE
  `user`
MODIFY
  `id` int NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 5;
--
  -- Contraintes pour les tables déchargées
  --
  --
  COMMIT;
  /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
  /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
  /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;