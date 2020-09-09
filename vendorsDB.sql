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
VALUES ("Cousins Maine Lobster", "We serve the best lobster in the world: Wild caught, sustainably harvested, 100% premium lobster from Maine", "New England Clam Chowder", "Lobster Tots", "Lobster Quesadilla", "Lobster Tacos", "Lobster Bisque");


INSERT INTO vendors (name, description, option1, option2, option3, option4, option5)
VALUES ("The Grilled Cheese Truck", "Making your hearts melt with all of our cheesy goodness", "Plain & Simple Melt
", "Chicken of the Sea Melt", "The Cheesy Mac ’n’ Rib ", "Brie Melt", "S’mores Melt");


INSERT INTO vendors (name, description, option1, option2, option3, option4, option5)
VALUE ("The Burnt Truck", "Premier, gourmet food with innovative twist on simple, comfort food", "Sloppy Joe Sliders", "Vietnamese Pork Sliders", "Cheeseburger Sliders","Korean BBQ Sliders","Beef Dip Sliders");


INSERT INTO vendors (name, description, option1, option2, option3, option4, option5)
VALUE ("Speedy Dog", "High quality food that's delivered in heightened speed", "Cowboy Dog", "Kahuna Dog" , "Vegan Veggie Dogs w/ grilled onions", "Carne Asada Tacos", "Nachos");


INSERT INTO vendors (name, description, option1, option2, option3, option4, option5)
VALUE ("Pinch Of Flavor", "Menu that embraces Hawaiian-American & Japanese cuisine", "Ahi Tuna Poke Bowl", "Salmon Teriyaki", "Lobster Fries", "Fat Fish Burrito", "3 Cancun Tacos");


INSERT INTO vendors (name, description, option1, option2, option3, option4, option5)
VALUE ("Made in Brooklyn NY Pizza", "Finally, authentic New York pizza has come to Los Angeles!", "Margherita Pizza", "Pepperoni Pizza", "House-made Sausage Pizza", "Pepperoni Stromboli", "Stromboli Supreme: pepperoni, house-made sausage & veggies");


INSERT INTO vendors (name, description, option1, option2, option3, option4, option5)
VALUE ("Los California Tacos", "One of the first taco trucks in America, changing not only what we eat, but how we eat it!", "Carne Asada Tacos", "Grill Asada Tacos" ,"Carnitas Tacos", "Chicharron Tacos", "Al Pastor Tacos");


INSERT INTO vendors (name, description, option1, option2, option3, option4, option5)
VALUE ("Rodney's Ribs", "Serving delicious barbeque food", "North Wood's Wings", "Beer Battered Zucchini Sticks", "Coconut Shrimp", "Chicken Strips" ,"The Loggers Combo");

SELECT * FROM vendors;