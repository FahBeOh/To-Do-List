DROP DATABASE IF EXISTS todo_db;

CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE tasks (
  id INT NOT NULL AUTO_INCREMENT,
  task VARCHAR(30) NOT NULL,
  type VARCHAR(30) NOT NULL,
  PRIMARY KEY ( `id` ) 
);

INSERT INTO tasks (task, type)
VALUES ("Groceries", "Today"), ("Finish Project", "Week"), ("Plan Vacation", "Month");
