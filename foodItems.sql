CREATE TABLE foodItems (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Energy DECIMAL(5,2) NOT NULL,
    Fat DECIMAL(5,2) NOT NULL,
    UnsaturatedFat DECIMAL(5,2) NOT NULL,
    Carbohydrates DECIMAL(5,2) NOT NULL,
    Sugar DECIMAL(5,2) NOT NULL,
    Protein DECIMAL(5,2) NOT NULL,
    AllergenInfo VARCHAR(255),
);

INSERT INTO FoodItems (Name, Energy, Fat, UnsaturatedFat, Carbohydrates, Sugar, Protein, AllergenInfo)
VALUES ('Pizza', 52, 0.2, 0.1, 14, 10.4, 0.3, 'None'),
       ('Baguette', 96, 0.3, 0.1, 27, 17.2, 1.2, 'Contains Gluten');