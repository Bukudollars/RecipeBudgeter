USE recipe_budgeter;
LOAD DATA INFILE '/var/lib/mysql-files/unit.csv' 
INTO TABLE unit
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(unitName, unitType);