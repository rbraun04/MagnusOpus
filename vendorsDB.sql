DROP DATABASE IF EXISTS events_DB;

CREATE DATABASE events_DB;

USE events_DB;

CREATE TABLE vendors (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    description VARCHAR(250),
    option1 VARCHAR(150),
    option2 VARCHAR(150),
    option3 VARCHAR(150),
    option4 VARCHAR(150),
    option5 VARCHAR(150),
    PRIMARY KEY (id)
);


INSERT INTO vendors (name, description, option1, option2, option3, option4, option5)
VALUES ("The Grilled Cheese Truck", "Making your hearts melt with all of our cheesy goodness", "Plain & Simple Melt
", "Chicken of the Sea Melt", "The Cheesy Mac ’n’ Rib ", "Brie Melt", "S’mores Melt");


INSERT INTO vendors (name, description, option1, option2, option3, option4, option5)
VALUE ("Prince of Venice", "Handmade Pasta Truck", "Maccheroni alla Bolognese", "Spaghetti alla Puttanesca", "Orecchiette al Pesto","Orecchiette al Pomodoro Fresco & Basilico","Bucatini alla Carbonara
");

SELECT * FROM vendors;