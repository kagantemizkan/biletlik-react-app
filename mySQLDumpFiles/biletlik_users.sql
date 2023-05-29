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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'dsfsd','sdfdsfdsf','$2a$10$vRp79SbrdwNX4HGpS8o/6enIFPvRL9jJlR3aZ/0pjXCnLE.IAPjFS'),(6,'q','asda','$2a$10$5rxl.FXTtYViwkivUtLWW.fO6qCB4DhMqdPkWCRp7qtQi6FOktm8u'),(7,'ghfd','dghd','$2a$10$o971opGyd/1oNZbUNmFZwObkBOF9Uk8V9xQXj.aFbWSKrzbj37AQ6'),(8,'qdsfdsf','dsfafdgfa','$2a$10$mLtkjteW1LGIKKrpOydoZeQcPC1GlhrCQ7EfMnKFPzHjY78p92RjO'),(9,'q','q@q','$2a$10$O1IKs2cr0Q2lOSTMxHiFK.B5L7VlO6jJJvcUmRpxQlCTl973OMopq'),(10,'e','ee','$2a$10$1ZdEc0Zr918PshJYMG6vleTqr.2asLs3Uk4QkyyxvFopwdsysg0Ja'),(11,'qw','qw','$2a$10$BviyBSXsiFHQ2x7WgSXoGuI3IosK.NJLkzU7ooZtAJ2Nyu2/lWXU6'),(13,'z','z','$2a$10$CyJ2G3thAJL.A.gMwrd8LORhDMxomM3zW4vR/R10wvmY.dO4rdEvm'),(14,'g','g','$2a$10$0Xe71QAkG5vAaVLJod3eeOuNte7gMVvysr6sXX2xdqzYb6bj9iwdq'),(15,'k','k','$2a$10$50c3zr2hdKRvKOmO6TS7ieP5/jiZC7qQqQgzg/EONjVNbHQQpE8ma'),(16,'admin','admin','$2a$10$grwZ9l.0HYHjBNO3iZ11T.E2beDK1oRNjcr29jFTNNjkqKhgEeJS6'),(17,'fedo','de@d','$2a$10$tRvN/1tQfpslIGwAXE8RzOTv9pO1JubW/nE4BGcf0sQdxHRZFwtmy');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-15  8:07:38
