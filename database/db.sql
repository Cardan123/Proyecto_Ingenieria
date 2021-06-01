
create database proyecto_ingenieria;

use proyecto_ingenieria;

create table pruebacrud(
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
)

show tables;

describe pruebacrud;
