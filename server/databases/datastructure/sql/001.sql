CREATE TABLE `room` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  `is_clean` tinyint(1) DEFAULT (0),
  PRIMARY KEY (`id`)
);

CREATE TABLE `person` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `img_src` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `day` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `list_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room_id` int DEFAULT NULL,
  `detail` text,
  `is_complete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_328371289` (`room_id`),
  CONSTRAINT `FK_328371289` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
);


