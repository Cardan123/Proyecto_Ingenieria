
create database proyecto_ingenieria;

use proyecto_ingenieria;

create table pruebacrud(
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
)

CREATE TABLE usuarios(
id         int(10) auto_increment not null,
nickname   varchar(100) not null,
password   varchar(50)  not null,
type       varchar(50)  not null,
CONSTRAINT pk_id PRIMARY KEY(id)
)ENGINE=InnoDB;

CREATE TABLE publicaciones(
id              int(10) auto_increment not null,  
id_usuarios      int(10) not null,
username        varchar(50)  not null,
content         varchar(50)  not null,
type_content    varchar(50)  not null,
CONSTRAINT pk_id PRIMARY KEY(id),
CONSTRAINT fk_id_usuarios FOREIGN KEY(id_usuarios) REFERENCES usuarios(id)
)ENGINE=InnoDB;

insert into usuarios (nickname,password,type) values ("cardan","12345","Adminstrador");

show tables;

describe pruebacrud;
