USE recipe_budgeter;
LOAD DATA INFILE '/var/lib/mysql-files/unit.csv' 
INTO TABLE unit
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(unitName, unitType);

LOAD DATA INFILE '/var/lib/mysql-files/mass_unit.csv'
INTO TABLE mass_unit
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(unitID, kgConversion);

LOAD DATA INFILE '/var/lib/mysql-files/volume_unit.csv'
INTO TABLE volume_unit
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(unitID, literConversion);

LOAD DATA INFILE '/var/lib/mysql-files/inventory.csv'
INTO TABLE inventory
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(itemName, stock, price, size, unitID);