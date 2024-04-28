CREATE DATABASE  IF NOT EXISTS `variable_selection_tool` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `variable_selection_tool`;
-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: variable_selection_tool
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
-- Table structure for table `design_vi_vd`
--

DROP TABLE IF EXISTS `design_vi_vd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `design_vi_vd` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_vi` int NOT NULL,
  `id_vd_array` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_vi_vd` (`id_vi`,`id_vd_array`),
  UNIQUE KEY `id_vi` (`id_vi`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `design_vi_vd`
--

LOCK TABLES `design_vi_vd` WRITE;
/*!40000 ALTER TABLE `design_vi_vd` DISABLE KEYS */;
INSERT INTO `design_vi_vd` VALUES (5,7,'6'),(6,8,'9'),(7,9,'10,11'),(8,10,'11,8,9');
/*!40000 ALTER TABLE `design_vi_vd` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `factors_treatments`
--

DROP TABLE IF EXISTS `factors_treatments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `factors_treatments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_vi` int NOT NULL,
  `id_factors_array` varchar(100) NOT NULL,
  `id_treatments_array` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_factor_treatment` (`id_vi`,`id_factors_array`,`id_treatments_array`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factors_treatments`
--

LOCK TABLES `factors_treatments` WRITE;
/*!40000 ALTER TABLE `factors_treatments` DISABLE KEYS */;
INSERT INTO `factors_treatments` VALUES (1,8,'','3,4'),(2,9,'','5,6,7'),(3,10,'','8,9');
/*!40000 ALTER TABLE `factors_treatments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fator`
--

DROP TABLE IF EXISTS `fator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fator` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(2000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fator`
--

LOCK TABLES `fator` WRITE;
/*!40000 ALTER TABLE `fator` DISABLE KEYS */;
/*!40000 ALTER TABLE `fator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instrumento`
--

DROP TABLE IF EXISTS `instrumento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instrumento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(2000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instrumento`
--

LOCK TABLES `instrumento` WRITE;
/*!40000 ALTER TABLE `instrumento` DISABLE KEYS */;
INSERT INTO `instrumento` VALUES (4,'Fórmula matemática','');
/*!40000 ALTER TABLE `instrumento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `metric_instrument`
--

DROP TABLE IF EXISTS `metric_instrument`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `metric_instrument` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_vd` int NOT NULL,
  `id_metric` int NOT NULL,
  `id_instrument` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_metric_instrument` (`id_vd`,`id_metric`,`id_instrument`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metric_instrument`
--

LOCK TABLES `metric_instrument` WRITE;
/*!40000 ALTER TABLE `metric_instrument` DISABLE KEYS */;
INSERT INTO `metric_instrument` VALUES (6,7,5,0),(7,7,6,0),(5,8,5,0),(2,9,7,0),(3,10,6,0),(4,11,8,0);
/*!40000 ALTER TABLE `metric_instrument` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `metrica`
--

DROP TABLE IF EXISTS `metrica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `metrica` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(2000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metrica`
--

LOCK TABLES `metrica` WRITE;
/*!40000 ALTER TABLE `metrica` DISABLE KEYS */;
INSERT INTO `metrica` VALUES (5,'Número médio de interações por usuário','Representa a quantidade de interações que os usuários realizaram no ambiente. Essa quantidade deve ser fracionada pela quantidade de usuários que realizaram a interção. Logo, X = número total de interação/número de total de usuários que interagiram no sistema.'),(6,'Feedback do usuário sobre a facilidade de uso do sistema e a utilidade percebida pelo usuário',''),(7,'Feedback do usuário sobre quão satisfeiro ficou ao usar o sistema',''),(8,'Quantidade de acertos em teste de conhecimento','Quantidade de acertos em testes de conhecimento (pré-teste e pós-teste) sobre o conteúdo abordado nos diálogos ou sessões de tutoria. Sendo analisada por meio da equação: Ganho de Aprendizagem = pontuação no pós-teste - pontuação no pré-teste.');
/*!40000 ALTER TABLE `metrica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `referencia`
--

DROP TABLE IF EXISTS `referencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `referencia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `referencia` varchar(2000) NOT NULL,
  `referencia_bib` varchar(2000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referencia`
--

LOCK TABLES `referencia` WRITE;
/*!40000 ALTER TABLE `referencia` DISABLE KEYS */;
INSERT INTO `referencia` VALUES (12,'https://doi.org/10.1016/j.ijhcs.2018.02.004','CORONADO, Miguel et al. A cognitive assistant for learning java featuring social dialogue. International Journal of Human-Computer Studies, v. 117, p. 55-67, 2018.'),(13,'vsdvsd','vdsdsv'),(14,'https://doi.org/10.1007/s40593-013-0007-3','TEGOS, Stergios; DEMETRIADIS, Stavros; TSIATSOS, Thrasyvoulos. A configurable conversational agent to trigger students’ productive dialogue: a pilot study in the CALL domain. International Journal of Artificial Intelligence in Education, v. 24, p. 62-91, 2014.'),(15,'https://doi.org/10.1007/978-3-642-13388-6_29','D’MELLO, Sidney et al. A time for emoting: When affect-sensitivity is and isn’t effective at promoting deep learning. In: Intelligent Tutoring Systems: 10th International Conference, ITS 2010, Pittsburgh, PA, USA, June 14-18, 2010, Proceedings, Part I 10. Springer Berlin Heidelberg, 2010. p. 245-254.'),(16,'https://doi.org/10.1007/978-3-642-34645-3_7','LATHAM, Annabel et al. Adaptive tutoring in an intelligent conversational agent system. Transactions on computational collective intelligence viii, p. 148-167, 2012.'),(17,'https://doi.org/10.1007/978-3-319-19773-9_11','EZEN-CAN, Aysu; BOYER, Kristy Elizabeth. A tutorial dialogue system for real-time evaluation of unsupervised dialogue act classifiers: Exploring system outcomes. In: Artificial Intelligence in Education: 17th International Conference, AIED 2015, Madrid, Spain, June 22-26, 2015. Proceedings 17. Springer International Publishing, 2015. p. 105-114.'),(18,'https://www.aaai.org/Papers/FLAIRS/2006/Flairs06-102.pdf','JORDAN, Pamela W. et al. A natural language tutorial dialogue system for physics. In: FLAIRS Conference. 2006. p. 521-526.'),(19,'CORONADO, Miguel et al. A cognitive assistant for learning java featuring social dialogue. International Journal of Human-Computer Studies, v. 117, p. 55-67, 2018.','CORONADO, Miguel et al. A cognitive assistant for learning java featuring social dialogue. International Journal of Human-Computer Studies, v. 117, p. 55-67, 2018.');
/*!40000 ALTER TABLE `referencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `referencia_fator`
--

DROP TABLE IF EXISTS `referencia_fator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `referencia_fator` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_factor` int NOT NULL,
  `id_ref` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_factor_ref` (`id_factor`,`id_ref`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referencia_fator`
--

LOCK TABLES `referencia_fator` WRITE;
/*!40000 ALTER TABLE `referencia_fator` DISABLE KEYS */;
/*!40000 ALTER TABLE `referencia_fator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `referencia_instrumento`
--

DROP TABLE IF EXISTS `referencia_instrumento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `referencia_instrumento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_instrument` int NOT NULL,
  `id_ref` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_instrument_ref` (`id_instrument`,`id_ref`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referencia_instrumento`
--

LOCK TABLES `referencia_instrumento` WRITE;
/*!40000 ALTER TABLE `referencia_instrumento` DISABLE KEYS */;
INSERT INTO `referencia_instrumento` VALUES (1,1,2);
/*!40000 ALTER TABLE `referencia_instrumento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `referencia_metrica`
--

DROP TABLE IF EXISTS `referencia_metrica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `referencia_metrica` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_metric` int NOT NULL,
  `id_ref` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_metric_ref` (`id_metric`,`id_ref`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referencia_metrica`
--

LOCK TABLES `referencia_metrica` WRITE;
/*!40000 ALTER TABLE `referencia_metrica` DISABLE KEYS */;
INSERT INTO `referencia_metrica` VALUES (2,2,3),(5,5,19),(4,8,15);
/*!40000 ALTER TABLE `referencia_metrica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `referencia_tratamento`
--

DROP TABLE IF EXISTS `referencia_tratamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `referencia_tratamento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_treatment` int NOT NULL,
  `id_ref` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_treatment_ref` (`id_treatment`,`id_ref`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referencia_tratamento`
--

LOCK TABLES `referencia_tratamento` WRITE;
/*!40000 ALTER TABLE `referencia_tratamento` DISABLE KEYS */;
INSERT INTO `referencia_tratamento` VALUES (1,2,1);
/*!40000 ALTER TABLE `referencia_tratamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `referencia_vd`
--

DROP TABLE IF EXISTS `referencia_vd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `referencia_vd` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_vd` int NOT NULL,
  `id_ref` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_vd_ref` (`id_vd`,`id_ref`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referencia_vd`
--

LOCK TABLES `referencia_vd` WRITE;
/*!40000 ALTER TABLE `referencia_vd` DISABLE KEYS */;
INSERT INTO `referencia_vd` VALUES (4,5,15),(9,7,12),(8,8,12),(5,11,16),(6,11,17),(7,11,18);
/*!40000 ALTER TABLE `referencia_vd` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `referencia_vi`
--

DROP TABLE IF EXISTS `referencia_vi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `referencia_vi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_vi` int NOT NULL,
  `id_ref` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_vi_ref` (`id_vi`,`id_ref`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referencia_vi`
--

LOCK TABLES `referencia_vi` WRITE;
/*!40000 ALTER TABLE `referencia_vi` DISABLE KEYS */;
INSERT INTO `referencia_vi` VALUES (3,4,4),(4,4,12),(5,5,4),(6,5,13),(7,5,14),(10,8,12),(12,9,14),(13,10,15);
/*!40000 ALTER TABLE `referencia_vi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tratamento`
--

DROP TABLE IF EXISTS `tratamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tratamento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(300) NOT NULL,
  `description` varchar(2000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tratamento`
--

LOCK TABLES `tratamento` WRITE;
/*!40000 ALTER TABLE `tratamento` DISABLE KEYS */;
INSERT INTO `tratamento` VALUES (3,'Um chatbot com diálogo social presente',''),(4,'Um chatbot com diálogo social ausente',''),(5,'Uma tutoria humana é fornecida a um grupo de alunos',''),(6,'Texto sobre o conteúdo','Um pequeno texto sobre o conteúdo é fornecido aos alunos para eles realizarem a leitura, sem uma figura de um agente para fornecer a tutoria'),(7,'Chatbot ','Um chatbot que realiza um sistema de tutoria é oferecido a um grupo de alunos. Esse chatbot é capaz de fornecer uma tutoria similar à de um tutor humano e que controla a apresentação do conteúdo.'),(8,'Chatbot sensível ao estado afetivo','Chatbot capaz de diagnosticar estados afetivos (estados de tédio, confusão e frustração) e fornecer tutorias sensíveis ao afeto'),(9,'Chatbot que fornece tutorias não afetivas','');
/*!40000 ALTER TABLE `tratamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(200) NOT NULL,
  `name` varchar(60) NOT NULL,
  `email` varchar(50) NOT NULL,
  `created_on` datetime DEFAULT NULL,
  `admin` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','pbkdf2:sha256:260000$VDqoyu4xnrXXDzpV$868a1421ac7b3895e679c865501232b318bbf40603aa6e5a5ac6e10a8673869d','admin','admin@admin.com','2022-12-10 17:09:46',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variavel_dependente`
--

DROP TABLE IF EXISTS `variavel_dependente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `variavel_dependente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(300) NOT NULL,
  `description` varchar(2000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variavel_dependente`
--

LOCK TABLES `variavel_dependente` WRITE;
/*!40000 ALTER TABLE `variavel_dependente` DISABLE KEYS */;
INSERT INTO `variavel_dependente` VALUES (7,'Uso da linguagem natural para estruturar as perguntas ao sistema','Essa variável representa o tipo de consulta que é realizada pelo aluno durante a interação com o sistema. Alunos tendem a interagir com o sistema usando somente palavras-chave ou frases completas. Eles podem ser influênciados pela natureza da interface com o qual interagem.'),(8,'Interação por usuário','Representa a apreciação pela interação. Os usuários tendem a interagir com sistemas que eles aprenciam, se identificam ou possuem preferência pelo uso em deterimento a outro. Essa apreciação pode incentivar o uso contínuo do sistema.'),(9,'Satisfação','Diz respeito a quão satisfeito o usuário fica durante a interação. Usuários mais satisfeitos interagem mais com o sistema em relação a outro.'),(10,'Aceitação do usuário em relação a experiência de tutoria','Representa as opiniões positivas ou negativas dos usuários sobre  como eles perceberam o sistema como ferramenta fácil de ser utilziada e que ela é útil para o aprendizado de um determinado assunto. Além disso, pode dizer respeito às percepções dos alunos sobre usabilidade, sobre eficácia do feedback durante a tutoria e a validade da tutoria.'),(11,'Ganho de aprendizagem','Representa o aprendizado aquirido pelo aluno a partir de uma sessão de tutoria ou instrução que é oferecida ao aluno');
/*!40000 ALTER TABLE `variavel_dependente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variavel_independente`
--

DROP TABLE IF EXISTS `variavel_independente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `variavel_independente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `description` varchar(2000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variavel_independente`
--

LOCK TABLES `variavel_independente` WRITE;
/*!40000 ALTER TABLE `variavel_independente` DISABLE KEYS */;
INSERT INTO `variavel_independente` VALUES (8,'Diálogo social','Diz respeito a capacidade do chatbot suportar conversas fiadas durante a interação. Nesse sentido, perguntas como \"qual a previsão do tempo?\" ou \"como está o transito hoje?\" podem ser respondida pelo chatbot.'),(9,'Modo de instrução','Diz respeito ao tipo de instrução que estudantes recebem para aprender um novo conteudo. '),(10,'Sensibilidade ao afeto','Diz respeito a capacidade de um chatbot oferecer conversas sensíveis aos estados afetivos do aluno. Ele precisa ser capaz de identificar o estado afetivo para então conseguir fornecer tutorias afetivas.');
/*!40000 ALTER TABLE `variavel_independente` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-21 20:11:26
