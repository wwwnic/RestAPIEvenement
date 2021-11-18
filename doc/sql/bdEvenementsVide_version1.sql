-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               8.0.26 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for projetevenements
CREATE DATABASE IF NOT EXISTS `projetevenements` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `projetevenements`;

-- Dumping structure for table projetevenements.commentaire
CREATE TABLE IF NOT EXISTS `commentaire` (
  `idCommentaire` int NOT NULL AUTO_INCREMENT,
  `idEvenement` int DEFAULT NULL,
  `idUtilisateur` int DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `texte` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idCommentaire`),
  KEY `FK_EvenComm` (`idEvenement`),
  KEY `FK_UtilComm` (`idUtilisateur`),
  CONSTRAINT `FK_EvenComm` FOREIGN KEY (`idEvenement`) REFERENCES `evenement` (`idEvenement`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_UtilComm` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table projetevenements.commentaire: ~0 rows (approximately)
/*!40000 ALTER TABLE `commentaire` DISABLE KEYS */;
/*!40000 ALTER TABLE `commentaire` ENABLE KEYS */;

-- Dumping structure for table projetevenements.evenement
CREATE TABLE IF NOT EXISTS `evenement` (
  `idEvenement` int NOT NULL AUTO_INCREMENT,
  `nomEvenement` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `idOrganisateur` int NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idEvenement`),
  KEY `FK_organisateur` (`idOrganisateur`),
  CONSTRAINT `FK_organisateur` FOREIGN KEY (`idOrganisateur`) REFERENCES `utilisateur` (`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table projetevenements.evenement: ~0 rows (approximately)
/*!40000 ALTER TABLE `evenement` DISABLE KEYS */;
INSERT INTO `evenement` (`idEvenement`, `nomEvenement`, `location`, `date`, `idOrganisateur`, `description`) VALUES
	(1, 'test', 'test', '2021-11-16 18:36:09', 1, 'test');
/*!40000 ALTER TABLE `evenement` ENABLE KEYS */;

-- Dumping structure for table projetevenements.utilisateur
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `idUtilisateur` int NOT NULL AUTO_INCREMENT,
  `nomUtilisateur` varchar(50) NOT NULL,
  `motDePasse` varchar(50) NOT NULL,
  `courriel` varchar(50) DEFAULT NULL,
  `telephone` varchar(10) DEFAULT NULL,
  `dateCreation` date NOT NULL,
  PRIMARY KEY (`idUtilisateur`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table projetevenements.utilisateur: ~0 rows (approximately)
/*!40000 ALTER TABLE `utilisateur` DISABLE KEYS */;
INSERT INTO `utilisateur` (`idUtilisateur`, `nomUtilisateur`, `motDePasse`, `courriel`, `telephone`, `dateCreation`) VALUES
	(1, 'test', 'test', 'test', 'test', '2021-11-16');
/*!40000 ALTER TABLE `utilisateur` ENABLE KEYS */;

-- Dumping structure for table projetevenements.utilisateurevenement
CREATE TABLE IF NOT EXISTS `utilisateurevenement` (
  `idEvenement` int NOT NULL,
  `idUtilisateur` int NOT NULL,
  PRIMARY KEY (`idEvenement`,`idUtilisateur`),
  KEY `FK_Util` (`idUtilisateur`),
  CONSTRAINT `FK_Even` FOREIGN KEY (`idEvenement`) REFERENCES `evenement` (`idEvenement`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_Util` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table projetevenements.utilisateurevenement: ~0 rows (approximately)
/*!40000 ALTER TABLE `utilisateurevenement` DISABLE KEYS */;
/*!40000 ALTER TABLE `utilisateurevenement` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
