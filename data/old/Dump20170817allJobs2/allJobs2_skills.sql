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
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skills` (
  `id` int(11) DEFAULT NULL,
  `skill` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (1,'UCCE'),(2,'Jeet Kune Do'),(3,'HCPCS'),(4,'SAP-SD'),(5,'Xcart'),(6,'CFML'),(7,'PTO'),(8,'Juniper Technologies'),(9,'nCode'),(10,'Brochures'),(11,'Student Affairs'),(12,'Pyrolysis'),(13,'European Affairs'),(14,'KPO'),(15,'IBM Tivoli'),(16,'Switchgear'),(17,'Swimming'),(18,'FX Spot'),(19,'Merchandising'),(20,'MS Axapta'),(21,'Social Media'),(22,'SolidWorks'),(23,'Evangelism'),(24,'SEP IRA'),(25,'Social Media Marketing'),(26,'VCI'),(27,'HP Server Hardware'),(28,'Modeling'),(29,'VMware VTSP'),(30,'Automobile'),(31,'BS7799'),(32,'ESL'),(33,'AHU'),(34,'TPC'),(35,'PMI'),(36,'HSIA'),(37,'Hardware Architecture'),(38,'PPP'),(39,'IFMA'),(40,'VC-1'),(41,'DUI Defense'),(42,'BPO'),(43,'Team Building'),(44,'Pyramix'),(45,'iPhone'),(46,'GCIA'),(47,'BD+C'),(48,'Federal Government'),(49,'XBR'),(50,'MBAL');
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-17 13:30:10
