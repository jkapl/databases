DROP DATABASE IF EXISTS chat;
CREATE DATABASE IF NOT EXISTS chat;


USE chat;

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(200) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE rooms (
  room_id INT NOT NULL  AUTO_INCREMENT,
  room_name VARCHAR(200) NOT NULL,
  PRIMARY KEY (room_id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  room_id INT NOT NULL,
  user_id INT NOT NULL,
  msg_id INT NOT NULL  AUTO_INCREMENT,
  msg VARCHAR(200) NOT NULL,
  created_at DATETIME NOT NULL,
  FOREIGN KEY (room_id) REFERENCES rooms (room_id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE,
  PRIMARY KEY (msg_id)
);

-- /* Create other tables and define schemas for them here! */

-- CREATE TABLE messages/users (
--   FOREIGN KEY (user_id),
--   FOREIGN KEY (msg_id)
-- )

-- CREATE TABLE rooms/users (
--   FOREIGN KEY (room_id),
--   FOREIGN KEY (user_id)
-- )

-- CREATE TABLE Persons
-- (
-- PersonID int,
-- LastName varchar(255),
-- FirstName varchar(255),
-- Address varchar(255),
-- City varchar(255)
-- );



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

