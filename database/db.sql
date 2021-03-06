
create database proyecto_ingenieria;

use proyecto_ingenieria;

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
content         varchar(2000)  not null,
type_content    varchar(50)  not null,
CONSTRAINT pk_id PRIMARY KEY(id),
CONSTRAINT fk_id_usuarios FOREIGN KEY(id_usuarios) REFERENCES usuarios(id)
)ENGINE=InnoDB;

CREATE TABLE comentarios(
id              int(10) auto_increment not null,  
id_usuarios     int(10) not null,
id_publicacion  int(10) not null,
username        varchar(50)  not null,
comentario         varchar(50)  not null,
CONSTRAINT pk_id PRIMARY KEY(id),
CONSTRAINT fk_id_usuarios_comentarios FOREIGN KEY(id_usuarios) REFERENCES usuarios(id),
CONSTRAINT fk_id_publicacion FOREIGN KEY(id_publicacion) REFERENCES publicaciones(id)
)ENGINE=InnoDB;

insert into usuarios (nickname,password,type) values ("cardan","7pn~<pd,4f+APf.'","Adminstrador");
insert into usuarios (nickname,password,type) values ("kevin","/LSp4K9Erf*_-v:5","Adminstrador");
insert into usuarios (nickname,password,type) values ("yasmin","~FFk%)@!AhYU8E-)","Adminstrador");
insert into usuarios (nickname,password,type) values ("arrieta","e;`f7ZdfHv(2\2Y&","Adminstrador");


show tables;
