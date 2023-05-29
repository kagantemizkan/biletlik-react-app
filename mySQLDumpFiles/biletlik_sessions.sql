-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: biletlik
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` int NOT NULL AUTO_INCREMENT,
  `movie_id` int NOT NULL,
  `screen_id` int NOT NULL,
  `start` varchar(5) NOT NULL,
  `end_` varchar(5) NOT NULL,
  PRIMARY KEY (`session_id`),
  KEY `movie_id` (`movie_id`),
  KEY `screen_id` (`screen_id`),
  CONSTRAINT `sessions_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`),
  CONSTRAINT `sessions_ibfk_2` FOREIGN KEY (`screen_id`) REFERENCES `screens` (`screen_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES (1,1,1,'13:45','1'),(2,1,1,'16:20','1'),(3,1,1,'20:30','1'),(4,1,1,'22:15','1'),(5,2,2,'12:15','2'),(6,2,2,'14:55','2'),(7,2,2,'17:35','2'),(8,2,2,'20:45','2'),(9,3,3,'16:45','3'),(10,3,3,'12:10','3'),(11,3,3,'20:30','3'),(12,3,3,'22:15','3'),(13,4,4,'12:30','4'),(14,4,4,'15:45','4'),(15,4,4,'18:15','4'),(16,4,4,'21:45','4'),(17,5,5,'12:30','6'),(18,5,5,'15:45','6'),(19,6,5,'18:15','6'),(20,6,5,'21:45','6'),(21,7,6,'12:30','6'),(22,7,6,'15:45','6'),(23,8,6,'18:15','6'),(24,8,6,'21:45','6'),(25,9,7,'12:30','7'),(26,9,7,'15:45','7'),(27,10,7,'18:15','7'),(28,10,7,'21:45','7'),(29,11,8,'12:30','8'),(30,11,8,'15:45','8'),(31,12,8,'18:15','8'),(32,12,8,'21:45','8'),(33,13,9,'12:30','9'),(34,13,9,'15:45','9'),(35,14,9,'18:15','9'),(36,14,9,'21:45','9'),(37,15,10,'12:30','10'),(38,15,10,'15:45','10'),(39,16,10,'18:15','10'),(40,16,10,'21:45','10');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-15  8:07:39
