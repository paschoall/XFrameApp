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
/*!50503 SET NAMES utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `design_vi_vd`
--

LOCK TABLES `design_vi_vd` WRITE;
/*!40000 ALTER TABLE `design_vi_vd` DISABLE KEYS */;
INSERT INTO `design_vi_vd` VALUES (16,12,'32,37'),(17,17,'38,40'),(18,22,'27');
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
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factors_treatments`
--

LOCK TABLES `factors_treatments` WRITE;
/*!40000 ALTER TABLE `factors_treatments` DISABLE KEYS */;
INSERT INTO `factors_treatments` VALUES (1,8,'','3,4'),(2,9,'','5,6,7'),(3,10,'','8,9'),(4,11,'','10'),(5,11,'','11'),(6,12,'','12'),(7,12,'','13'),(8,13,'','14'),(9,13,'','15'),(10,13,'','16'),(11,14,'','17'),(12,14,'','18'),(13,14,'','19'),(14,14,'','20'),(15,14,'','21'),(16,15,'','23'),(17,15,'','24'),(18,15,'','25'),(19,15,'','26'),(20,15,'','27'),(21,15,'','28'),(22,16,'','29'),(23,16,'','30'),(24,17,'','31'),(25,17,'','32'),(26,17,'','33'),(27,17,'','34'),(28,18,'','35'),(29,18,'','36'),(30,18,'','37'),(31,19,'','38'),(32,19,'','39'),(33,19,'','40'),(34,19,'','41'),(35,20,'','42'),(36,20,'','43'),(37,20,'','44'),(38,21,'','45'),(39,21,'','46'),(40,21,'','47'),(41,21,'','48'),(42,22,'','49'),(43,22,'','50'),(44,22,'','51'),(45,22,'','52'),(46,23,'','53'),(47,23,'','54'),(48,23,'','55'),(49,23,'','56'),(50,24,'','57'),(51,24,'','58'),(52,25,'','59'),(53,25,'','60'),(54,26,'','61'),(55,26,'','62');
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
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instrumento`
--

LOCK TABLES `instrumento` WRITE;
/*!40000 ALTER TABLE `instrumento` DISABLE KEYS */;
INSERT INTO `instrumento` VALUES (5,'Pontuação emitida pelos participantes no The Godspeed Questionnaire','O The Godspeed Questionnaire é um instrumento de avaliação amplamente utilizado para medir a percepção de características sociais e emocionais de robôs e sistemas interativos.'),(6,'Concordância de adequação entre avaliadores humanos e o classificador de diálogo','Dois avaliadores humanos classificam manualmente cada explicação, feedback ou resposta do sistema. Suas classificações são então comparadas entre si e com as classificações atribuídas pelo classificador de diálogo.\n\n'),(7,'Porcentagem de Palavras Corretamente Reconhecidas','Essa métrica calcula a proporção de palavras que foram reconhecidas corretamente pelo sistema de reconhecimento de fala em relação ao total de palavras faladas. '),(8,'Porcentagem de Frases Reconhecidas sem Erros de Palavra','Essa métrica avalia a porcentagem de frases que foram reconhecidas pelo sistema sem nenhum erro de palavra. '),(9,'Porcentagem de Frases Rejeitadas pelo Reconhecedor de Fala','Essa métrica indica a proporção de frases que foram rejeitadas pelo sistema de reconhecimento de fala, ou seja, frases que o sistema não conseguiu reconhecer ou interpretar corretamente. '),(10,'Comprimento Médio da Expressão em Palavras','Essa métrica calcula o comprimento médio das expressões ou sentenças faladas pelos usuários. '),(11,'Número Médio de Expressões por Sessão','Essa métrica mede a quantidade média de expressões ou sentenças faladas pelos usuários em uma sessão de interação.'),(12,'Quantidade de interações que envolveram cumprimentos, despedidas, carinhas sorridentes, palavras rud','Frequência com que os alunos utilizam expressões de cortesia, como cumprimentos e despedidas, assim como o uso de emojis sorridentes ou outras expressões positivas. ocorrência de palavras rudes ou ofensivas, bem como o uso de piadas durante as interações. '),(13,'Quantidade de interações dos alunos que remetem a tópicos fora da tarefa','Quantidade de interações em que os alunos desviam do tópico principal da tutoria e iniciam discussões ou fazem perguntas sobre assuntos não relacionados à tarefa em questão.'),(14,'Quantidade de interações dos alunos que fazem comentários negativos sobre o chatbot','Quantidade de interações em que os alunos expressam comentários negativos ou críticas em relação ao chatbot'),(15,'Quantidade de consultas feitas por participante usando palavras-chave','Esta métrica mede o número de consultas feitas por cada participante utilizando apenas palavras-chave durante a interação com o sistema. Essas consultas podem ser perguntas ou comandos breves que utilizam termos específicos para direcionar a interação.'),(16,'Número médio de interações por usuário baseado nos diferentes tipos de consulta','Essa métrica calcula a média de interações por usuário com base nos diferentes tipos de consulta utilizados. Ela avalia o número médio de interações, incluindo perguntas, respostas e outras formas de interação, levando em consideração se foram realizadas com palavras-chave ou frases completas.'),(17,'Taxa de adesão às sugestões recomendadas pelo sistema','Essa métrica mede o número médio de vezes que o usuário segue uma sugestão recomendada pelo sistema.'),(18,'Feedback dos usuários sobre a utilidade das sugestões','Os usuários são convidados a compartilhar suas percepções sobre a qualidade, relevância e impacto das sugestões recebidas. Isso permite obter insights valiosos sobre a eficácia das recomendações do chatbot e identificar possíveis melhorias.'),(19,'Número médio de interações por usuário','Essa métrica mede a quantidade média de interações que cada usuário tem com o sistema. Ela pode ser calculada dividindo o número total de interações pelo número total de usuários. Essa métrica fornece uma indicação do nível de engajamento dos usuários com o sistema.'),(20,'Duração de conversa em minutos','Ela pode ser calculada somando a duração de todas as conversas e dividindo pelo número total de conversas.'),(21,'Número de conversas relacionadas ao tópico','Essa métrica conta o número de conversas que estão diretamente relacionadas ao tópico ou assunto principal do sistema.'),(22,'Número de conversas não relacionadas ao tópico','Essa métrica conta o número de conversas que não estão relacionadas ao tópico principal do sistema.'),(23,'Quantidade de consultas feitas por participante usando frases completas','Essa métrica conta o número de consultas feitas por cada participante utilizando frases completas durante a interação com o sistema. Essas consultas são formuladas de forma mais elaborada, envolvendo uma estrutura gramatical completa e fornecendo mais contexto para a solicitação.'),(24,'Feedback de satisfação do usuário','O feedback de satisfação pode ser obtido por meio de questionários, pesquisas pós-interação, avaliações de estrelas ou escalas de classificação, entre outros métodos. Os usuários são convidados a expressar sua opinião sobre o nível de satisfação, geralmente em uma escala.\n'),(25,'Escala do Instrumento de Personagem do Agente','Essa métrica se refere à quantidade de respostas dadas pelos usuários em uma escala específica chamada \"Agent Persona Instrument\" (Instrumento de Personagem do Agente). '),(26,'Quantidade de respostas explícitas (posições e argumentos) ','Número de vezes em que os usuários forneceram respostas que contêm posições claras e argumentos substantivos em relação ao conteúdo apresentado pelo sistema.'),(27,'Pontuação em testes de conhecimento','Essa métrica se baseia na quantidade de acertos em testes de conhecimento aplicados antes (pré-teste) e depois (pós-teste) das sessões de diálogos ou tutoria. ');
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
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metric_instrument`
--

LOCK TABLES `metric_instrument` WRITE;
/*!40000 ALTER TABLE `metric_instrument` DISABLE KEYS */;
INSERT INTO `metric_instrument` VALUES (6,7,5,0),(7,7,6,0),(5,8,5,0),(2,9,7,0),(3,10,6,0),(4,11,8,0),(8,12,9,0),(9,13,13,0),(10,14,14,0),(33,15,0,9),(12,16,16,0),(13,19,17,0),(14,21,18,0),(15,22,19,0),(16,23,20,0),(17,24,21,0),(18,25,22,0),(19,26,0,5),(20,27,0,6),(25,30,0,7),(24,30,0,8),(23,30,0,9),(22,30,0,10),(21,30,0,11),(28,31,0,12),(27,31,0,13),(26,31,0,14),(36,32,0,15),(38,32,0,16),(37,32,0,23),(40,33,0,17),(41,33,0,18),(42,36,0,19),(43,36,0,20),(44,36,0,21),(45,36,0,22),(46,37,0,24),(47,38,0,25),(48,39,0,26),(49,40,0,27);
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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metrica`
--

LOCK TABLES `metrica` WRITE;
/*!40000 ALTER TABLE `metrica` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referencia`
--

LOCK TABLES `referencia` WRITE;
/*!40000 ALTER TABLE `referencia` DISABLE KEYS */;
INSERT INTO `referencia` VALUES (12,'https://doi.org/10.1016/j.ijhcs.2018.02.004','CORONADO, Miguel et al. A cognitive assistant for learning java featuring social dialogue. International Journal of Human-Computer Studies, v. 117, p. 55-67, 2018.'),(13,'vsdvsd','vdsdsv'),(14,'https://doi.org/10.1007/s40593-013-0007-3','TEGOS, Stergios; DEMETRIADIS, Stavros; TSIATSOS, Thrasyvoulos. A configurable conversational agent to trigger students’ productive dialogue: a pilot study in the CALL domain. International Journal of Artificial Intelligence in Education, v. 24, p. 62-91, 2014.'),(15,'https://doi.org/10.1007/978-3-642-13388-6_29','D’MELLO, Sidney et al. A time for emoting: When affect-sensitivity is and isn’t effective at promoting deep learning. In: Intelligent Tutoring Systems: 10th International Conference, ITS 2010, Pittsburgh, PA, USA, June 14-18, 2010, Proceedings, Part I 10. Springer Berlin Heidelberg, 2010. p. 245-254.'),(16,'https://doi.org/10.1007/978-3-642-34645-3_7','LATHAM, Annabel et al. Adaptive tutoring in an intelligent conversational agent system. Transactions on computational collective intelligence viii, p. 148-167, 2012.'),(17,'https://doi.org/10.1007/978-3-319-19773-9_11','EZEN-CAN, Aysu; BOYER, Kristy Elizabeth. A tutorial dialogue system for real-time evaluation of unsupervised dialogue act classifiers: Exploring system outcomes. In: Artificial Intelligence in Education: 17th International Conference, AIED 2015, Madrid, Spain, June 22-26, 2015. Proceedings 17. Springer International Publishing, 2015. p. 105-114.'),(18,'https://www.aaai.org/Papers/FLAIRS/2006/Flairs06-102.pdf','JORDAN, Pamela W. et al. A natural language tutorial dialogue system for physics. In: FLAIRS Conference. 2006. p. 521-526.'),(19,'CORONADO, Miguel et al. A cognitive assistant for learning java featuring social dialogue. International Journal of Human-Computer Studies, v. 117, p. 55-67, 2018.','CORONADO, Miguel et al. A cognitive assistant for learning java featuring social dialogue. International Journal of Human-Computer Studies, v. 117, p. 55-67, 2018.'),(20,'https://cdn.aaai.org/FLAIRS/2006/Flairs06-102.pdf','JORDAN, Pamela W. et al. A natural language tutorial dialogue system for physics. In: FLAIRS. 2006. p. 521-526.'),(21,'https://link.springer.com/chapter/10.1007/978-3-642-13388-6_29','D’MELLO, Sidney et al. A time for emoting: When affect-sensitivity is and isn’t effective at promoting deep learning. In: Intelligent Tutoring Systems: 10th International Conference, ITS 2010, Pittsburgh, PA, USA, June 14-18, 2010, Proceedings, Part I 10. Springer Berlin Heidelberg, 2010. p. 245-254.'),(22,'https://link.springer.com/chapter/10.1007/978-3-319-19773-9_11','EZEN-CAN, Aysu; BOYER, Kristy Elizabeth. A tutorial dialogue system for real-time evaluation of unsupervised dialogue act classifiers: Exploring system outcomes. In: Artificial Intelligence in Education: 17th International Conference, AIED 2015, Madrid, Spain, June 22-26, 2015. Proceedings 17. Springer International Publishing, 2015. p. 105-114.'),(23,'https://www.sciencedirect.com/science/article/pii/S1071581918300636','CORONADO, Miguel et al. A cognitive assistant for learning java featuring social dialogue. International Journal of Human-Computer Studies, v. 117, p. 55-67, 2018.'),(24,'https://link.springer.com/chapter/10.1007/978-3-642-13437-1_14','AI, Hua et al. Exploring the effectiveness of social capabilities and goal alignment in computer supported collaborative learning. In: Intelligent Tutoring Systems: 10th International Conference, ITS 2010, Pittsburgh, PA, USA, June 14-18, 2010, Proceedings, Part II 10. Springer Berlin Heidelberg, 2010. p. 134-143.'),(25,'https://link.springer.com/article/10.1007/s40593-013-0007-3','TEGOS, Stergios; DEMETRIADIS, Stavros; TSIATSOS, Thrasyvoulos. A configurable conversational agent to trigger students’ productive dialogue: a pilot study in the CALL domain. International Journal of Artificial Intelligence in Education, v. 24, p. 62-91, 2014.'),(26,'https://ieeexplore.ieee.org/abstract/document/6901402','TEGOS, Stergios; DEMETRIADIS, Stavros N.; KARAKOSTAS, Anastasios. Conversational agent to promote students productive talk: The effect of solicited vs. unsolicited agent intervention. In: 2014 IEEE 14th International Conference on Advanced Learning Technologies. IEEE, 2014. p. 72-76.'),(27,'https://repository.isls.org/handle/1/1767','ADAMSON, David et al. Intensification of group knowledge exchange with academically productive talk agents. In: Proceedings of the 10th International Conference on Computer Supported Collaborative Learning. 2014. p. 10-17.'),(28,'https://link.springer.com/chapter/10.1007/978-3-642-22000-5_58','LATHAM, Annabel et al. Oscar: an intelligent adaptive conversational agent tutoring system. In: Agent and Multi-Agent Systems: Technologies and Applications: 5th KES International Conference, KES-AMSTA 2011, Manchester, UK, June 29–July 1, 2011. Proceedings 5. Springer Berlin Heidelberg, 2011. p. 563-572.'),(29,'https://ieeexplore.ieee.org/abstract/document/6065056','TEGOS, Stergios; DEMETRIADIS, Stavros; KARAKOSTAS, Anastasios. MentorChat: Introducing a configurable conversational agent as a tool for adaptive online collaboration support. In: 2011 15th panhellenic conference on informatics. IEEE, 2011. p. 13-17.'),(30,'https://link.springer.com/chapter/10.1007/978-3-642-34645-3_7','LATHAM, Annabel et al. Adaptive tutoring in an intelligent conversational agent system. Transactions on computational collective intelligence viii, p. 148-167, 2012.'),(31,'http://ir.canterbury.ac.nz/handle/10092/5050','WEERASINGHE, Amali et al. Evaluating the effectiveness of adaptive tutorial dialogues in database design. 2010.'),(32,'https://www.researchgate.net/profile/G-Jackson/publication/239066981_Adaptive_tutorial_dialogue_in_AutoTutor/links/55e89e9608ae3e1218423e30/Adaptive-tutorial-dialogue-in-AutoTutor.pdf#page=31','PON-BARRY, Heather et al. Evaluating the effectiveness of SCoT: A spoken conversational tutor. In: ITS 2004 Workshop on Dialog-based Intelligent Tutoring Systems. 2004. p. 23-32.'),(33,'https://icmc.usp.br/e/cbe8c','PON-BARRY, Heather et al. Evaluating the effectiveness of SCoT: A spoken conversational tutor. In: ITS 2004 Workshop on Dialog-based Intelligent Tutoring Systems. 2004. p. 23-32.'),(34,'https://www.learntechlib.org/p/171180/','MCDONALD, Jenny et al. An empirically-based, tutorial dialogue system: design, implementation and evaluation in a first year health sciences course. In: ASCILITE-Australian Society for Computers in Learning in Tertiary Education Annual Conference. Australasian Society for Computers in Learning in Tertiary Education, 2013. p. 562-572.'),(35,'https://link.springer.com/chapter/10.1007/978-3-319-19773-9_1','ALBACETE, Patricia; JORDAN, Pamela; KATZ, Sandra. Is a dialogue-based tutoring system that emulates helpful co-constructed relations during human tutoring effective?. In: Artificial Intelligence in Education: 17th International Conference, AIED 2015, Madrid, Spain, June 22-26, 2015. Proceedings 17. Springer International Publishing, 2015. p. 3-12.'),(36,'https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=51abe977bb0c1efee6b75eef6561d7c68db17eb6','HUANG, Yi-Ting et al. An English dialogue companion system for supporting conversation practice. Proceedings of ICCE 2008, p. 43-48, 2008.');
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referencia_instrumento`
--

LOCK TABLES `referencia_instrumento` WRITE;
/*!40000 ALTER TABLE `referencia_instrumento` DISABLE KEYS */;
INSERT INTO `referencia_instrumento` VALUES (1,1,2),(6,25,36),(3,27,33),(4,27,34),(5,27,35);
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referencia_tratamento`
--

LOCK TABLES `referencia_tratamento` WRITE;
/*!40000 ALTER TABLE `referencia_tratamento` DISABLE KEYS */;
INSERT INTO `referencia_tratamento` VALUES (1,2,1),(2,10,23),(3,12,23),(4,13,23),(5,14,24),(6,15,24),(7,16,24),(8,31,30),(9,33,30),(10,34,31);
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referencia_vd`
--

LOCK TABLES `referencia_vd` WRITE;
/*!40000 ALTER TABLE `referencia_vd` DISABLE KEYS */;
INSERT INTO `referencia_vd` VALUES (4,5,15),(9,7,12),(8,8,12),(5,11,16),(6,11,17),(7,11,18),(10,40,20),(11,40,21),(12,40,22);
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referencia_vi`
--

LOCK TABLES `referencia_vi` WRITE;
/*!40000 ALTER TABLE `referencia_vi` DISABLE KEYS */;
INSERT INTO `referencia_vi` VALUES (3,4,4),(4,4,12),(5,5,4),(6,5,13),(7,5,14),(10,8,12),(12,9,14),(13,10,15),(14,11,23),(15,12,23),(16,13,24),(17,14,25),(18,14,26),(19,14,27),(20,17,28),(21,17,29);
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
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tratamento`
--

LOCK TABLES `tratamento` WRITE;
/*!40000 ALTER TABLE `tratamento` DISABLE KEYS */;
INSERT INTO `tratamento` VALUES (10,'Um chatbot que recomenda possíveis interações relacionadas ao tópico da conversa para o aluno.','Os alunos interagem com um chatbot que responde às suas perguntas e oferece recomendações de interações relacionadas ao tópico discutido. Por exemplo, quando um aluno faz uma pergunta, o chatbot não apenas responde, mas também sugere possíveis perguntas que o aluno pode fazer sobre o mesmo tema ou assuntos e conceitos relacionados à resposta fornecida. Com essas sugestões, o chatbot busca complementar a obtenção de informações completas sobre o assunto, fornecendo novas respostas que enriquecem o conhecimento do aluno.'),(11,'Um chatbot que não recomenda possíveis interações relacionadas ao tópico da conversa para o aluno','Os alunos interagem com um chatbot que responde às suas perguntas, porém, não fornece sugestões ou recomendações adicionais. Após responder a uma pergunta, o chatbot aguarda a próxima pergunta do aluno, sem oferecer direcionamentos ou sugestões de novos tópicos ou conceitos a serem explorados.'),(12,'Um chatbot que não demonstra nenhuma interação social com o aluno','Os alunos interagem com um chatbot desenvolvido para fornecer respostas relevantes às suas perguntas, sem se desviar de um objetivo específico. O chatbot concentra-se exclusivamente em fornecer informações e orientações específicas, não se envolvendo em conversas informais ou demonstrando elementos que favoreçam a interação social, como fazer comentários ou criar perguntas não relacionadas ao conteúdo discutido'),(13,'Um chatbot que tem uma interação social com o aluno ','Os alunos interagem com um chatbot que é desenvolvido para promover interações sociais e conversas informais. O chatbot não se restringe a fornecer respostas relevantes às perguntas dos alunos, mas também busca envolver-se em diálogos sociais, emitindo comentários, fazendo perguntas que não estão diretamente relacionadas a um conteúdo específico. '),(14,'O chatbot fornece interações que correspondem aos objetivos do parceiro de diálogo','Um chatbot é capaz de oferecer interações que estão em consonância com as perspectivas e intenções do parceiro de diálogo, atendendo suas necessidades e expectativas durante a interação. Ele busca compreender os objetivos do parceiro de diálogo e adaptar suas respostas e sugestões para ajudar a alcançar esses objetivos de forma eficaz.'),(15,'O chatbot fornece interações que não correspondem aos objetivos do parceiro de diálogo.','Um chatbot é capaz de oferecer interações que não estão alinhadas com os objetivos específicos do parceiro de diálogo. O chatbot pode fornecer respostas ou sugestões que incluem uma perspectiva diferente daquela do aluno.'),(16,'O chatbot fornece interações sem dar preferência a uma perspectiva específica do parceiro de diálogo','Um chatbot procura manter uma postura neutra e imparcial em suas interações, não favorecendo uma perspectiva específica do parceiro de diálogo. Ele utiliza uma abordagem equilibrada e imparcial ao fornecer informações e sugestões, levando em consideração diferentes perspectivas e buscando apresentar uma visão abrangente dos tópicos discutidos.'),(17,'Intervenção iniciada automaticamente pelo chatbot','O chatbot inicia automaticamente a interação com os alunos sempre que identifica uma oportunidade de oferecer apoio. O chatbot toma a iniciativa de oferecer auxílio ao aluno sem aguardar uma solicitação explícita do aluno.'),(18,'Intervenção realizada mediante autorização do aluno','O chatbot informa ao aluno, por meio de uma pista visual, que está ele está disponível para oferecer suporte. O aluno tem a opção de autorizar ou solicitar a intervenção do chatbot, decidindo se deseja ou não receber assistência.'),(19,'Intervenção solicitada e não solicitada','O chatbot pode alternar entre as duas abordagens, respondendo tanto a solicitações específicas dos alunos quanto intervindo proativamente sem ser solicitado. Ele está preparado para atender às necessidades dos alunos, tanto quando eles pedem ajuda quanto quando o chatbot identifica oportunidades de intervenção relevantes em sessões de tutoria.'),(20,'Intervenções direcionadas aos alunos que mais precisam de apoio','Durante sessões de tutoria envolvendo diversos alunos, o chatbot identifica os participantes que estão contribuindo menos para a discussão e direciona suas intervenções a esses alunos específicos.'),(21,'Intervenções direcionadas ao grupo de alunos','Durante sessões de tutoria com diversos alunos, o chatbot realiza intervençoes que abrangem todos os participantes da sessão, em vez de se concentrar em um aluno específico. O chatbot pode estimular a interação ou a colaboração entre os alunos.'),(22,'Interação de chatbot com o aluno para aprendizado de conteúdos específicos','Um chatbot interage com o aluno sobre o conteúdo, visando ajudá-lo a aprender conceitos específicos do domínio. O chatbot apresenta perguntas ao aluno e, à medida que ele não consegue responder, o chatbot oferece dicas e feedback sobre as respostas.'),(23,'Simulador virtual para aprendizado teórico-prático','Um simulador virtual é disponibilizado aos alunos. Eles realizam simulações relacionadas ao domínio para obter uma compreensão teórico-prática dos conceitos específicos.'),(24,'Simulador virtual com chatbot integrado','Os alunos interagem com um simulador virtual que inclui um chatbot integrado. O simulador oferece uma plataforma interativa em que os alunos podem explorar e realizar simulações relacionadas ao conteúdo. Ao mesmo tempo, o chatbot interage com os alunos durante as simulações, fazendo questionamentos sobre o que está ocorrendo e fornecendo feedback relevante para auxiliar no aprendizado.'),(25,'Ausência de recursos durante o aprendizado','Nenhum recurso é oferecido ao aluno durante o processo de aprendizado, deixando-o responsável por buscar os conteúdos e informações por conta própria.'),(26,'Tutoria humana para os alunos','Um tutor humano fica disponível para um grupo de alunos, oferecendo suporte e orientação durante o aprendizado.'),(27,'Somente leitura de texto','Os alunos têm acesso a um pequeno texto sobre um determinado conteúdo e são incentivados a estudar e aprender sobre o tema por meio da leitura do texto fornecido. Nesse modo de aprendizado, não há a presença de um chatbot para fornecer tutoria ou interação adicional.'),(28,'Chatbot com função de tutoria similar a um tutor humano','Os alunos têm interações com um chatbot que atua como um sistema de tutoria, desempenhando um papel semelhante ao de um tutor humano. Esse chatbot é projetado para fornecer suporte e orientação aos alunos, respondendo às suas dúvidas e apresentando o conteúdo de forma organizada e didática. Ele assume a responsabilidade de guiar os alunos durante o processo de aprendizado, oferecendo explicações, exemplos e recursos adicionais conforme necessário.'),(29,'Classificador supervisionado','Os alunos interagem com um chatbot que foi treinado para classificar os diálogos do usuário usando um método de aprendizado supervisionado, como uma árvore de decisão. O chatbot utiliza um conjunto de diálogos previamente rotulados para aprender padrões e relações entre as características dos diálogos. '),(30,'Classificador não supervisionado','Os alunos interagem com um chatbot que foi treinado para classificar os diálogos do usuário usando um método de aprendizado não supervisionado, como o agrupamento hierárquico. Nessa abordagem, o chatbot analisa os padrões e a similaridade entre os diálogos para agrupá-los em categorias ou clusters. '),(31,'Chatbot adaptativo ao estilo de aprendizagem predominante do aluno','Os alunos interagem com um chatbot que é capaz de identificar o estilo de aprendizagem predominante de cada aluno e personaliza o diálogo de acordo com suas preferências e necessidades de aprendizado.'),(32,'Chatbot não adaptativo','Os alunos interagem com um chatbot que não leva em consideração o estilo de aprendizagem individual ao interagir, fornecendo um diálogo padronizado que não se adapta às preferências ou necessidades específicas de cada aluno.'),(33,'Chatbot adaptativo ao estilo de aprendizagem incompatível do aluno','Os alunos interagem com um chatbot que identifica o estilo de aprendizagem predominante de cada aluno e adapta o diálogo a um estilo de aprendizagem incompatível.'),(34,'Chatbot com feedback adaptativo na resolução de problemas','Os alunos interagem com um chatbot que possui a capacidade de analisar as soluções que eles elaboram para problemas. O chatbot fornece feedback direcionado, levando em consideração a qualidade da solução apresentada pelo aluno. Ele diferencia entre soluções completas e aquelas que possuem problemas, fornecendo feedback adequado para cada caso específico. O diálogo do chatbot é adaptado às respostas e soluções dos alunos, com ênfase nas áreas que precisam ser melhoradas.'),(35,'Chatbot informativo','Os alunos têm acesso a um chatbot que é capaz de responder suas perguntas e fornecer informações de acordo com suas necessidades individuais. O chatbot interage com os alunos por meio de conversas e fornece respostas relevantes e precisas às suas consultas.'),(36,'Mecanismo de pesquisa online','Os alunos têm acesso a um mecanismo de pesquisa online, como o Google, que lhes permite realizar pesquisas usando palavras-chave ou frases. Ao inserirem suas consultas, eles recebem uma lista de recursos online relevantes que podem ser explorados para acessar as informações necessárias.'),(37,'Linhas telefônicas de informação','Os alunos têm acesso a linhas telefônicas dedicadas que fornecem informações específicas. Eles podem entrar em contato por telefone e fazer perguntas aos atendentes para obter acesso às informações desejadas.'),(38,'Feeback por meio de fala, expressões faciais e mensagens de texto ','Os alunos interagem com um chatbot que utiliza diferentes elementos de comunicação, como a fala, as expressões faciais e as mensagens de texto, para fornecer feedback. O chatbot utiliza recursos verbais e não verbais para transmitir de forma eficaz o feedback necessário.'),(39,'Feedback por meio de mensagens de texto','Os alunos interagem com um chatbot que utiliza mensagem de texto para fornecer feedback necessário.'),(40,'Feedback por meio de fala','Os alunos interagem com um chatbot que utiliza mensagem de voz para fornecer feedback necessário.'),(41,'Feedback por meio de fala e expressões faciais','Os alunos interagem com um chatbot que utiliza tanto a fala quanto expressões faciais para fornecer feedback necessário. '),(42,'Legenda durante o turno de fala do chatbot com desaparecimento no turno de fala do usuário','Os alunos interagem com um chatbot que se comunica por voz. Durante o turno de fala do chatbot, legendas são apresentadas ao usuário, fornecendo um texto correspondente ao que está sendo falado. No entanto, as legendas desaparecem quando é a vez do usuário falar.'),(43,'Legenda durante o turno de fala do chatbot com permanência no turno de fala do usuário','Os alunos interagem com um chatbot que se comunica por voz. Durante o turno de fala do chatbot, legendas são apresentadas ao usuário, fornecendo um texto correspondente ao que está sendo falado. As legendas permanecem visíveis durante o turno de fala do usuário.'),(44,'Ausência de legendas durante a interação','Os alunos interagem com um chatbot que se comunica exclusivamente por voz. Durante o turno de fala do chatbot ou do usuário, não são apresentadas legendas ao usuário, ou seja, não há exibição de texto correspondente à fala.'),(45,'Triálogos com informações concretas','O aluno interage com dois chatbots que estão de acordo entre si e fornecem informações corretas e confiáveis sobre o assunto em questão.'),(46,'Triálogos com informações falsas','O aluno interage com dois chatbots que concordam entre si, porém, fornecem informações incorretas e enganosas sobre o assunto em questão.'),(47,'Triálogos com informações contraditórias (chatbot feminino correto)','O aluno interage com dois chatbots que apresentam informações contraditórias. O chatbot com características femininas fornece as informações corretas, enquanto o chatbot com características masculinas discorda, fornecendo uma informação incorreta.'),(48,'Triálogos com informações contraditórias (chatbot masculino correto)','O aluno interage com dois chatbots que apresentam informações contraditórias. O chatbot com características masculinas fornece as informações corretas, enquanto o chatbot com características femininas discorda, fornecendo uma informação incorreta.'),(49,'Input baseado em voz','Os alunos interagem com um chatbot por meio de fala sobre um determinado tema. Os alunos fazer perguntas, comentários ou solicitar informações de forma livre por voz.'),(50,'Input baseado em texto','Os alunos interagem com um chatbot por meio de textos, sem restrições linguísticas. Podem digitar perguntas, comentários ou solicitar informações de forma livre por texto.'),(51,'Input baseado em um menu','Os alunos podem interagir com um chatbot por meio de um menu de opções. O chatbot apresenta um conjunto de alternativas e os usuários escolhem uma opção específica para prosseguir com a interação.'),(52,'Ausência de interações','Os alunos não têm acesso a um chatbot ou qualquer tipo de sistema para interagir.'),(53,'Tutoria por tutores humanos','Os alunos recebem tutoria de tutores humanos, onde cada tutor utiliza suas próprias estratégias para fornecer feedback e orientação personalizada aos alunos. Os tutores aplicam seu conhecimento e experiência para ajudar os alunos a alcançar seus objetivos de aprendizagem.'),(54,'Ausência de tutoria','Os alunos não têm a oportunidade de interagir com um sistema ou tutor que forneça um tipo específico de tutoria.'),(55,'Tutoria de chatbot sem intervenção','Os alunos recebem tutoria por meio de um chatbot. Durante a interação com o chatbot, os alunos são solicitados a fornecer respostas para questionamentos específicos. O chatbot não realiza tentativas de correção das respostas fornecidas pelos alunos nem fornece feedback sobre a compreensão ou correção das mesmas. '),(56,'Tutoria de chatbot com intervenção','Os alunos recebem tutoria por meio de um chatbot. Durante a interação com o chatbot, eles são solicitados a fornecer respostas para questionamentos específicos. O chatbot analisa cuidadosamente as respostas do aluno e o contexto do diálogo, utilizando essa análise para selecionar uma estratégia apropriada. O chatbot oferece dicas relevantes para melhorar a resposta do aluno, sugere leituras adicionais para aprofundar o conhecimento e busca auxiliar o aluno na correção de erros.'),(57,'Um chatbot empático','Um chatbot de cuidado interativo é fornecido aos alunos, utilizando expressões faciais, gestos de mão, movimentos corporais e diálogo social para mostrar empatia e escuta ativa. O chatbot é capaz de reconhecer e responder de forma sensível às necessidades emocionais dos alunos.'),(58,'Ausência de chatbot empático','Um chatbot que não demonstra empatia ou escuta ativa é fornecido aos alunos. O chatbot não possui recursos para reconhecer ou responder às emoções dos alunos, limitando-se a fornecer informações ou respostas predefinidas sem levar em consideração as necessidades emocionais dos alunos durante a interação.'),(59,'Chatbot sensível ao afeto','Os alunos interagem com um chatbot que é capaz de identificar sinais emocionais na linguagem, entonação vocal ou expressões do aluno, permitindo-lhe compreender o estado emocional atual do aluno. O chatbot pode ajustar sua resposta de maneira apropriada, oferecendo suporte e orientação adequados à situação emocional do aluno.'),(60,'Chatbot não sensível  ao afeto','Os alunos interagem com um chatbot que não leva em consideração os estamos emocionais do aluno durante a interação.'),(61,'Chatbot com expressão ','Os alunos interagem com um chatbot que muda de expressão e tem o seu corpo alterado se o usuário demorar para responder às questões que ele apresenta ao aluno. O chatbot fica triste e mudar de cor se o usuário demorar para responder.'),(62,'Chatbot sem expressão ','Os alunos interagem com um chatbot que mantém uma expressão facial constante e não mostra alterações no corpo, independentemente do tempo que o usuário leva para responder às questões apresentadas pelo chatbot.');
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
INSERT INTO `users` VALUES (1,'admin','pbkdf2:sha256:260000$VDqoyu4xnrXXDzpV$868a1421ac7b3895e679c865501232b318bbf40603aa6e5a5ac6e10a8673869d','admin','admin@admin.com','2022-12-10 17:09:46',1),(2,'eiji','pbkdf2:sha256:260000$y2qZYxS5OXLiKq1n$e08027af6c7efd1a979eeb9223e13a4c189bd873853687172696c9d7eb7c2ca3','Eiji','eiji10000@gmail.com','2022-12-18 13:06:49',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variavel_dependente`
--

LOCK TABLES `variavel_dependente` WRITE;
/*!40000 ALTER TABLE `variavel_dependente` DISABLE KEYS */;
INSERT INTO `variavel_dependente` VALUES (17,'Ansiedade do aluno','Refere-se ao nível de ansiedade experimentado pelo aluno durante a interação com o chatbot. '),(18,'Autoconfiança','Refere-se ao nível de confiança que o aluno possui em relação às suas habilidades e competências específicas, como habilidades de comunicação, resolução de problemas, tomada de decisão, entre outras.'),(20,'Aceitação do usuário em relação ao acesso à informação','Refere-se à opinião geral dos usuários em relação ao acesso a um conjunto de informações por meio de mecanismos específicos. Ela aborda aspectos importantes relacionados ao uso desses mecanismos, como a facilidade de uso na formulação de perguntas compreendidas pelos mecanismos e a confiabilidade e utilidade das informações fornecidas por eles.'),(26,'Inteligência percebida','A inteligência percebida refere-se à impressão que uma pessoa tem sobre as habilidades e comportamentos de um chatbot ou sistema inteligente. É a percepção de que o chatbot possui características que são semelhantes às habilidades cognitivas humanas, como compreensão, raciocínio, aprendizado e tomada de decisão.'),(27,'Qualidade do diálogo','A qualidade do diálogo está relacionada à capacidade do sistema de compreender e responder de maneira precisa e relevante às solicitações, perguntas e comentários dos usuários.\n'),(28,'Utilidade do feedback do chatbot','Remete à efetividade e relevância das respostas fornecidas pelo chatbot em relação aos argumentos apresentados pelo usuário. '),(29,'Progresso do diálogo','Remete ao processo do feedback emitido pelo chatbot durante a interação com o usuário. Ela tem como objetivo analisar como o chatbot avança e se desenvolve ao longo do diálogo, levando em consideração a qualidade e a relevância das respostas fornecidas.'),(30,'Precisão de fala','Remete a taxa de precisão na transcrição das palavras faladas, indicando a capacidade do sistema em compreender e interpretar corretamente o que foi dito pelo usuário.'),(31,'Comportamentos conversacionais','Os comportamentos conversacionais referem-se aos padrões de interação e comportamento dos alunos ao se envolverem em uma sessão de tutoria com o chatbot. Essas interações podem incluir perguntas feitas pelos alunos, respostas às perguntas do chatbot, solicitações de esclarecimento, fornecimento de exemplos, expressão de opiniões e emoções, entre outros.'),(32,'Uso da linguagem natural para estruturar as perguntas ao sistema','Refere-se à forma como os alunos formulam suas consultas durante a interação com o sistema. Os alunos têm a liberdade de utilizar linguagem natural, o que significa que podem fazer perguntas utilizando apenas palavras-chave ou frases completas, de acordo com sua preferência. A escolha da estrutura da pergunta pode ser influenciada pela natureza da interface com a qual estão interagindo.'),(33,'Utilidade das sugestões nas interações subsequentes','Refere-se à eficácia das recomendações de conceitos fornecidas durante interações anteriores entre o aluno e o chatbot. Após receber uma recomendação, os usuários têm a opção de seguir ou não a sugestão na próxima interação.'),(36,'Intensidade de uso','A intensidade de uso refere-se a frequência e a duração das interações dos usuários com o sistema, refletindo a apreciação e a preferência pelo uso contínuo do sistema em detrimento de outros.'),(37,'Satisfação do usuário durante a interação','Refere-se o nível de satisfação do usuário durante a interação com o sistema. Ela reflete a experiência subjetiva do usuário em relação à qualidade, utilidade e adequação das interações com o chatbot. Uma maior satisfação está associada a uma experiência mais positiva e pode influenciar o engajamento e a frequência de interação do usuário com o sistema.'),(38,'Aceitação do usuário em relação à experiência de tutoria','Refere-se à avaliação da experiência dos usuários em relação ao sistema de tutoria, levando em consideração sua percepção sobre a facilidade de uso, utilidade para o aprendizado e eficácia do feedback durante a tutoria. Além disso, também abrange a validade da tutoria em relação aos objetivos de aprendizado.'),(39,'Raciocínio explícito',' Refere-se à capacidade dos usuários de apresentar argumentos, soluções e posições durante as interações com o chatbot.'),(40,'Ganho de aprendizagem','Refere-se ao progresso ou avanço no conhecimento, habilidades ou competências de um estudante após uma sessão de tutoria ou instrução\n'),(41,'Motivação','Representa o nível de motivação e engajamento do usuário em relação à experiência de uso do sistema.'),(42,'Tempo médio de interrupção de pausa','Quantifica o tempo de pausa entre as interações feitas pelo sistema e o usuário durante uma conversa. Ela mede o intervalo de tempo que o usuário leva para responder ao chatbot ou enviar novas mensagens após o sistema ter feito sua parte na interação.'),(43,'Pensamento crítico','O pensamento crítico é caracterizado pela capacidade de realizar uma análise cuidadosa e reflexiva, considerando evidências, conceitos, metodologias, critérios e contexto relevantes para embasar o julgamento.'),(44,'Simpatia','A simpatia refere-se a uma impressão positiva que uma pessoa tem em relação a outra pessoa ou objeto. É a capacidade de se identificar com os sentimentos e emoções da outra pessoa ou objeto e responder a eles de maneira positiva.\n');
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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variavel_independente`
--

LOCK TABLES `variavel_independente` WRITE;
/*!40000 ALTER TABLE `variavel_independente` DISABLE KEYS */;
INSERT INTO `variavel_independente` VALUES (11,'Sugestão de informação complementar durante a interação','Refere-se à capacidade de um chatbot em fornecer sugestões de interações possíveis relacionadas a um tema específico, que podem complementar a obtenção de informações relevantes durante uma nova interação sobre aquele mesmo tema.'),(12,'Diálogo social','Refere-se à capacidade de um chatbot interagir com o aluno simulando uma conversa casual. O chatbot não se limita a oferecer informações ou responder a perguntas específicas, mas também é capaz de se envolver em conversas mais espontâneas, sem um objetivo específico. O chatbot pode emitir comentários, fazer perguntas, compartilhar opiniões e até mesmo contar piadas, criando uma experiência mais próxima da interação humana.'),(13,'Correspondência ao objetivo da interação','Refere-se à capacidade do chatbot de alinhar os objetivos de diferentes indivíduos em uma interação ou colaboração. Isso implica que o chatbot tem a capacidade de expressar uma inclinação em direção aos objetivos de um dos alunos que participam de um triálogo. O chatbot é capaz de direcionar suas respostas e sugestões com base nas perspectivas desse aluno, visando facilitar a busca por soluções que atendam às suas necessidades específicas. '),(14,'Modo de intervenção','Refere-se à forma como um chatbot interage com os alunos durante uma sessão de diálogo. Existem diferentes modos de intervenção que podem ser adotados pelos chatbots, dependendo das necessidades e características do contexto educacional, desde intervenções automáticas e não solicitadas até intervenções realizadas mediante autorização do aluno. '),(15,'Mecanismo de apoio ao ensino','Refere-se aos recursos ou abordagens utilizados pelos alunos para aprender um determinado conteúdo.'),(16,'Classificador de diálogo','Refere-se à técnica ou método empregado para categorizar ou classificar os diálogos dos usuários. Um classificador de diálogo permite que o chatbot compreenda e interprete as intenções do usuário, de modo a fornece\nr respostas apropriadas.\n'),(17,'Diálogo adaptativo','Refere-se à capacidade do chatbot de ajustar o diálogo de acordo com características específicas do aluno ou do contexto de aprendizagem.'),(18,'Mecanismo de troca de informação','Refere-se à variedade de ferramentas e recursos disponibilizados aos alunos para que possam obter acesso a informações relevantes. Esses mecanismos podem ser utilizados para obter informações específicas.'),(19,'Tipo de mídia para feedback','Refere-se às diferentes formas de comunicação utilizadas pelo chatbot para fornecer feedback aos alunos. Isso inclui o uso de fala, expressões faciais (comunicação não verbal) e mensagens de texto como meios de transmitir as informações e orientações ao aluno.'),(20,'Legenda durante a interação','Refere-se à capacidade do chatbot exibir textos na forma de legendas durante a interação com os alunos. Essas legendas podem proporcionar uma representação textual do que está sendo falado pelo chatbot, auxiliando os usuários na compreensão e acompanhamento do diálogo.'),(21,'Credibilidade da informação em triálogos','Refere-se aos diferentes tipos de informações apresentadas aos alunos por meio de chatbots durante triálogos, podendo variar entre informações corretas, incorretas ou inconsistentes. Os triálogos consistem em interações entre um aluno e dois chatbots, nos quais diferentes tipos de informações são fornecidos aos alunos pelos chatbots. '),(22,'Tipo de input do usuário no sistema','Refere-se às diferentes formas de interação ou input que um usuário pode utilizar para realizar ações em um sistema. Pode incluir, por exemplo, o uso de voz, texto ou cliques em botões para fornecer instruções ao sistema.'),(23,'Estilo de tutoria','Refere-se à abordagem utilizada na tutoria ou orientada oferecida aos alunos durante o processo de aprendizagem. '),(24,'Cuidado interativo','Refere-se à capacidade de um chatbot fornecer atenção, empatia e escuta ativa durante a interação com  os alunos.'),(25,'Sensibilidade ao afeto','Refere-se à capacidade de um chatbot reconhecer e responder aos estados afetivos do aluno durante uma interação. O chatbot deve ser capaz de diagnosticar estados emocionais dos alunos e fornecer tutorias sensíveis a essas emoções.'),(26,'Expressão de pressão de tempo','Refere-se à capacidade de um chatbot transmitir visualmente a pressão ou expectativa de tempo durante uma interação. Isso pode ser feito por meio de mudanças na expressão facial, postura corporal ou outros elementos visuais.');
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

-- Dump completed on 2024-05-05 14:49:31
