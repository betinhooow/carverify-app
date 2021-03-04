DROP TABLE Car;
DROP TABLE People;


CREATE TABLE People( 
			Id int PRIMARY KEY,
			Name varchar(255),
			Age int,
			Address varchar(255),
			NmHouse int,
			Neighborhood varchar(255),
			City varchar(255),			
			);

CREATE TABLE Car(
			Id int PRIMARY KEY,
			CarPlaque varchar(255),
			Brand varchar(255),
			Model varchar(255),
			YearBrand int,
			YearModel int,
			Id_People int FOREIGN KEY REFERENCES People(Id)
);

INSERT INTO People VALUES (1, 'Suelen', 33, 'Rua Bla', 159, 'Bairro Bla Bla', 'Campinas');
INSERT INTO People VALUES (2, 'Maria', 27, 'Rua Bla 1', 19, 'Bairro Bla Bla 1', 'Sumaré');
INSERT INTO People VALUES (3, 'Emerson', 33, 'Rua Bla 2', 59, 'Bairro Bla Bla 6', 'Hortolandia');
INSERT INTO People VALUES (4, 'Fabiana', 33, 'Rua Bla 3 ', 15, 'Bairro Bla Bla 7', 'Valinhos');
INSERT INTO People VALUES (5, 'Bruno', 33, 'Rua Bla 4', 9, 'Bairro Bla Bla 5', 'Americana');

INSERT INTO Car VALUES (1, 'FRT-1236', 'Chevrolet', 'Agile', 2014, 2014, 1);
INSERT INTO Car VALUES (2, 'GTY-2581', 'Honda', 'Civic', 2019, 2020, 1);
INSERT INTO Car VALUES (3, 'FIY-2697', 'Fiat', 'Uno', 2016, 2017, 2);
INSERT INTO Car VALUES (4, 'QRE-9578', 'Chevrolet', 'Corsa', 2015, 2015, 3);
INSERT INTO Car VALUES (5, 'HRE-3178', 'Volskvagen', 'Gol', 1999, 2000, 4);
INSERT INTO Car VALUES (6, 'ADH-9177', 'Fiat', 'Palio', 2013, 2014, 4);
INSERT INTO Car VALUES (7, 'VJY-4586', 'Honda', 'Fit', 2019, 2019, 3);
INSERT INTO Car VALUES (8, 'ASE-5748', 'Chevrolet', 'S-10', 2006, 2007, 1);


			