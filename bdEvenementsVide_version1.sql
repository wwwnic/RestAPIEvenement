-- --------------------------------------------------------
-- Hôte:                         localhost
-- Version du serveur:           8.0.26 - MySQL Community Server - GPL
-- SE du serveur:                Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour projetevenements
CREATE DATABASE IF NOT EXISTS `projetevenements` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `projetevenements`;

-- Listage de la structure de la table projetevenements. commentaire
CREATE TABLE IF NOT EXISTS `commentaire` (
  `idCommentaire` int NOT NULL,
  `idEvenement` int NOT NULL,
  `idUtilisateur` int NOT NULL,
  `date` datetime DEFAULT NULL,
  `texte` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idCommentaire`),
  KEY `FK_EvenComm` (`idEvenement`),
  KEY `FK_UtilComm` (`idUtilisateur`),
  CONSTRAINT `FK_EvenComm` FOREIGN KEY (`idEvenement`) REFERENCES `evenement` (`idEvenement`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `FK_UtilComm` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='id généré côté client';

-- Listage des données de la table projetevenements.commentaire : ~0 rows (environ)
/*!40000 ALTER TABLE `commentaire` DISABLE KEYS */;
/*!40000 ALTER TABLE `commentaire` ENABLE KEYS */;

-- Listage de la structure de la table projetevenements. evenement
CREATE TABLE IF NOT EXISTS `evenement` (
  `idEvenement` int NOT NULL,
  `nomEvenement` int NOT NULL,
  `location` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `idOrganisateur` int NOT NULL,
  `description` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idEvenement`),
  KEY `FK_organisateur` (`idOrganisateur`),
  CONSTRAINT `FK_organisateur` FOREIGN KEY (`idOrganisateur`) REFERENCES `utilisateur` (`idUtilisateur`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='id généré côté client';

-- Listage des données de la table projetevenements.evenement : ~0 rows (environ)
/*!40000 ALTER TABLE `evenement` DISABLE KEYS */;
/*!40000 ALTER TABLE `evenement` ENABLE KEYS */;

-- Listage de la structure de la table projetevenements. utilisateur
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `idUtilisateur` int NOT NULL,
  `nomUtilisateur` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `motDePasse` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `courriel` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telephone` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dateCreation` date NOT NULL,
  PRIMARY KEY (`idUtilisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='id généré côté client';

-- Listage des données de la table projetevenements.utilisateur : ~0 rows (environ)
/*!40000 ALTER TABLE `utilisateur` DISABLE KEYS */;
INSERT INTO `utilisateur` (`idUtilisateur`, `nomUtilisateur`, `motDePasse`, `courriel`, `telephone`, `dateCreation`) VALUES
	(1, 'Bob', 'pw123', 'bobBricoleur@gmail.com', '5141119999', '2021-11-15');
/*!40000 ALTER TABLE `utilisateur` ENABLE KEYS */;

-- Listage de la structure de la table projetevenements. utilisateurevenement
CREATE TABLE IF NOT EXISTS `utilisateurevenement` (
  `idEvenement` int NOT NULL,
  `idUtilisateur` int NOT NULL,
  PRIMARY KEY (`idEvenement`,`idUtilisateur`),
  KEY `FK_Util` (`idUtilisateur`),
  CONSTRAINT `FK_Even` FOREIGN KEY (`idEvenement`) REFERENCES `evenement` (`idEvenement`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `FK_Util` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table projetevenements.utilisateurevenement : ~0 rows (environ)
/*!40000 ALTER TABLE `utilisateurevenement` DISABLE KEYS */;
/*!40000 ALTER TABLE `utilisateurevenement` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
