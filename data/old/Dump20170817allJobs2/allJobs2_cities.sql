-- MySQL dump 10.13  Distrib 5.7.19, for Linux (i686)
--
-- Host: localhost    Database: allJobs2
-- ------------------------------------------------------
-- Server version	5.7.19-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(30) NOT NULL,
  `country` varchar(30) NOT NULL,
  `lat` float DEFAULT NULL,
  `lng` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'Nahf','Israel',32.9344,35.3168),(2,'Jerusalem','Israel',31.769,35.2163),(3,'Dabburiya','Israel',32.6926,35.3712),(4,'‘Akko','Israel',32.9281,35.0765),(5,'Safed','Israel',32.9646,35.496),(6,'Deir hanna','Israel',32.862,35.3637),(7,'Qiryat Yam','Israel',32.8497,35.0697),(8,'Tamra','Israel',32.853,35.1987),(9,'Gan Yavne','Israel',31.7874,34.7066),(10,'Kafr Misr','Israel',32.6452,35.4215),(11,'Qiryat Motzkin','Israel',32.8371,35.0776),(12,'Mitzpe Ramon','Israel',30.6094,34.8011),(13,'Hurfeish','Israel',33.0171,35.3484),(14,'Ganne Tiqwa','Israel',32.0597,34.8732),(15,'Buqeia','Israel',32.9775,35.3335),(16,'Lapid','Israel',31.9176,35.0322),(17,'Kafr Kanna','Israel',32.7466,35.3424),(18,'Abu Ghaush','Israel',31.8059,35.1093),(19,'Kafir Yasif','Israel',32.9545,35.1623),(20,'Bueina','Israel',32.8064,35.3649),(21,'Revava','Israel',32.1193,35.129),(22,'Nehalim','Israel',32.0601,34.9107),(23,'Mevo horon','Israel',31.8488,35.0358),(24,'Gedera','Israel',31.8146,34.78),(25,'Eilabun','Israel',32.8369,35.4003),(26,'Akko','Israel',32.9281,35.0765),(27,'Maghar','Israel',32.8898,35.407),(28,'Ramat Gan','Israel',32.0823,34.8106),(29,'Haifa','Israel',32.8184,34.9885),(30,'Or Yehuda','Israel',32.0292,34.8579),(31,'Kafr Manda','Israel',32.8103,35.2601),(32,'Qesarya','Israel',32.5189,34.9046),(33,'Kefar Yona','Israel',32.3167,34.9351),(34,'Kefar Shemaryahu','Israel',32.1853,34.8208),(35,'Bene Ayish','Israel',31.7833,34.75),(36,'Shibli','Israel',32.6946,35.3925),(37,'Tirat Karmel','Israel',32.7602,34.9718),(38,'Herzliyya','Israel',32.1663,34.8254),(39,'Bene Beraq','Israel',32.0807,34.8338);
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-17 13:30:11
