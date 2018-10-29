DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(40) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    stock_quantity INT(6) NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bop it", "toys", 8.50, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hot wheels", "toys", 3.25, 93);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Megatron transformer", "toys", 13.75, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("GameBoy Color", "electronics", 89.99, 26);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The notorious B.I.G", "music & video", 9.99, 34);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sony Discman", "electronics", 46.99, 52);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pulp Fiction", "music & video", 11.99, 43);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jurrasic Park", "music & video", 11.99, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Golden Fox", "books", 7.89, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Ghost Road", "books", 7.50, 89);



