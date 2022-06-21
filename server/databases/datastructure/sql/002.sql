CREATE TABLE `star_value` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`value` INT DEFAULT NULL,
	`name` VARCHAR(128) DEFAULT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `list_item` ADD COLUMN `star_value_id` INT DEFAULT NULL;

ALTER TABLE `list_item` ADD CONSTRAINT FK_328371282 FOREIGN KEY (`star_value_id`) REFERENCES `star_value`(`id`) ON UPDATE CASCADE ON DELETE SET NULL;

ALTER TABLE `list_item` ADD COLUMN `person_id` INT DEFAULT NULL;

ALTER TABLE `list_item` ADD CONSTRAINT FK_328371285 FOREIGN KEY (`person_id`) REFERENCES `person`(`id`) ON UPDATE CASCADE ON DELETE SET NULL;

CREATE TABLE `daily_chore_list` (
  `id` int NOT NULL AUTO_INCREMENT,
  `is_complete` tinyint DEFAULT '0',
  `day_id` int DEFAULT NULL,
  `room_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_328371276` (`room_id`),
  KEY `FK_328371278` (`day_id`),
  CONSTRAINT `FK_328371276` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_328371278` FOREIGN KEY (`day_id`) REFERENCES `day` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE `j__daily_chore_list__list_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `daily_chore_list_id` int DEFAULT NULL,
  `list_item_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_328371271` (`daily_chore_list_id`),
  KEY `FK_328371272` (`list_item_id`),
  CONSTRAINT `FK_328371271` FOREIGN KEY (`daily_chore_list_id`) REFERENCES `daily_chore_list` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_328371272` FOREIGN KEY (`list_item_id`) REFERENCES `list_item` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);