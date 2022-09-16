-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data


CREATE TABLE "shoppingList" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80) NOT NULL,
	"quantity" DECIMAL (6,2),
	"unit" VARCHAR (20)
	);
	
INSERT INTO "shoppingList" (name, quantity, unit)
	VALUES
	 ('eggplant', 3, 'eggplants'),
	 ('flour', 5, 'kilograms'),
	 ('dumplings',50,'dumplings'),
	 ('pickle juice', 2.25, 'liters');