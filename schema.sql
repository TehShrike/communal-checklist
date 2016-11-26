CREATE DATABASE communalChecklist;
USE communalChecklist;

CREATE TABLE list (
	pk INT UNSIGNED NOT NULL AUTO_INCREMENT,
	id CHAR(36) NOT NULL,
	editKey CHAR(36) NOT NULL,
	other MEDIUMTEXT,
	version MEDIUMINT UNSIGNED NOT NULL,
	PRIMARY KEY (pk),
	UNIQUE KEY id (id),
	KEY editKey (editKey)
);

CREATE TABLE category (
	pk INT UNSIGNED NOT NULL AUTO_INCREMENT,
	id CHAR(36) NOT NULL,
	name TEXT,
	description MEDIUMTEXT,
	listId CHAR(36) NOT NULL,
	PRIMARY KEY (pk),
	UNIQUE KEY id (id),
	KEY listId (listId)
);

CREATE TABLE item (
	pk INT UNSIGNED NOT NULL AUTO_INCREMENT,
	id CHAR(36) NOT NULL,
	name TEXT,
	url TEXT,
	categoryId CHAR(36) NOT NULL,
	PRIMARY KEY (pk),
	UNIQUE KEY id (id),
	KEY categoryId (categoryId)
);

CREATE TABLE checkbox (
	pk INT UNSIGNED NOT NULL AUTO_INCREMENT,
	id CHAR(36) NOT NULL,
	checkedBy TEXT,
	itemId CHAR(36) NOT NULL,
	PRIMARY KEY (pk),
	UNIQUE KEY id (id),
	KEY itemId (itemId)
);
