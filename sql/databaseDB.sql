-- CREAMOS PRIMERO LAS TABLAS PRINCIPALES
CREATE DATABASE sql_inventario;

use sql_inventario;
--CARGO

create table cargo(
idCargo int auto_increment primary key not null,
nombre varchar(50) unique not null
);
--empleado
create table empleado(
ciEmpleado int primary key not null,
nombre varchar(50) not null,
apellidoP varchar(50) not null,
apellidoM varchar(50) not null,
correo varchar(50) not null,
telefono int not null,
profesion varchar(50) not null,
pkCargo int,
foreign key (pkcargo) references cargo(idcargo)
);

--Egreso
CREATE TABLE egreso(
idEgreso int auto_increment PRIMARY KEY,
fecha date not NULL,
hora DATETIME not null,
pkidRecepsonista int,
pkidDepachador int ,

FOREIGN KEY (pkidDepachador) REFERENCES empleado(ciEmpleado),
FOREIGN KEY (pkidRecepsonista) REFERENCES empleado(ciEmpleado)

);




--Ingreso

CREATE TABLE ingreso(
idIngreso int auto_increment PRIMARY KEY not NULL,
fecha date not NULL,
hora datetime not null,
cantidad int not NULL,
pkidRecepsonista INT,

FOREIGN KEY (pkidRecepsonista) REFERENCES empleado(ciEmpleado)

);

--LABORATORIO
create table laboratorio(
idLaboratorio int auto_increment primary key not null,
nombre varchar(50) not null,
telefono INT not null,
correo VARCHAR(60) not null

);


--Representante
create table representante(
ciRepresentante INT primary key not null ,
nombre varchar(50) not null,
apellidoP varchar(50) not null,
apellidoM varchar(50) not null,
correo varchar(50) not null,
telefono int not null,
pkLaboratorio int,
foreign key (pkLaboratorio) REFERENCES laboratorio(idLaboratorio)

);

----------------------
--PRODUCTO

--presentacion
create table presentacion(
idPresentacion int auto_increment primary key not null,
nombre varchar(50) not null

);

create table grupo_terapeutico(
idGrupo int auto_increment primary key not null,
nombre varchar(50) not null

);

--Medicamento
create table medicamento(
idMedicamento int auto_increment primary key not null,
nombreComercial VARCHAR(50) not null,
nombreCientifico VARCHAR(50) not NULL,


pkPresentacion INT,
pkGrupo int,

FOREIGN KEY(pkPresentacion) REFERENCES presentacion(idPresentacion),
FOREIGN KEY(pkGrupo) REFERENCES grupo_terapeutico(idGrupo)
);

--DetalleEgreso
CREATE TABLE detalleEgreso(
idDetalle int auto_increment PRIMARY KEY NOT NULL,
cantidad int not null,
pkEgreso int,
pkMedicamento int,

FOREIGN KEY (pkEgreso) REFERENCES egreso(idEgreso),
FOREIGN KEY (pkMedicamento) REFERENCES medicamento(idMedicamento)

);

--LOTE
CREATE TABLE lote(
idLote INT auto_increment PRIMARY KEY NOT NULL,
cantidad int not null,
fechaVencimiento date not NULL,

pkMedicamento int,
pkIngreso int,
pkLaboratorio INT,
FOREIGN KEY(pkLaboratorio) REFERENCES laboratorio(idLaboratorio),
FOREIGN KEY (pkMedicamento) REFERENCES medicamento (idMedicamento),
FOREIGN KEY(pkIngreso) REFERENCES ingreso(idIngreso)

);


---Ingreso de datos

--
--laboratorio
INSERT INTO laboratorio(nombre,telefono,correo)
values ('Lafar',11111000, 'lafar@lafar.com.bo');

--cargo
insert into cargo(nombre)
VALUES ('Recepcionista');

--
--empleado
INSERT INTO empleado(ciEmpleado,nombre,apellidoP,apellidoM,correo,telefono,pkCargo,profesion)
VALUES (88877,'Ivan', 'Carpio', 'C', 'carpio@gmail.com',1000010, 1 ,'Tec. Almacenes');

--representante
INSERT into representante(ciRepresentante,nombre,apellidoP,apellidoM,telefono,correo,pkLaboratorio)
VALUES (87946,'Julio', 'Alpire', 'Cabrera', 75330445 ,'alpiCabd@et.com',1);


--presentacion
INSERT INTO presentacion(nombre)
VALUES ('Lat�x');

--Tipo 
INSERT INTO grupo_terapeutico(nombre)
VALUES ('VITAMINAS SUPLEMENTOS MINERALES');


--medicamento
INSERT into medicamento(nombreCientifico,nombreComercial,pkPresentacion,pkGrupo)
VALUES ('Ibuprofeno', 'Anagesico antiflamatorio',1,1);
----
--Ingreso 

insert into ingreso(fecha,hora,pkidRecepsonista)
VALUES('2021-05-31','15:30:00',88877);

--LOTE
INSERT INTO lote(cantidad,fechaVencimiento,pkIngreso,pkMedicamento)
VALUES (500,'2025-05-31',4,2);


--- Mostra agrupaciones
--Empleado y sus respectivos cargo
SELECT empleado.nombre, cargo.nombre
FROM empleado left JOIN cargo
on empleado.pkCargo = cargo.idCargo;

-- vista
CREATE VIEW empleados as (SELECT empleado.nombre, cargo.nombre
FROM empleado left JOIN cargo
on empleado.pkCargo = cargo.idCargo);


-- STOCK
SELECT medicamento.nombreComercial as 'Nombre Comercial', medicamento.nombreCientifico  AS 'Nombre Cientifico', 
medicamento.pkGrupo as 'Grupo Terapeutico', 
medicamento.pkPresentacion as 'presentacion', 
lote.cantidad 'cantiad', lote.fechaVencimiento as 'fecha vencimiento'
FROM medicamento LEFT JOIN lote
on lote.pkMedicamento = medicamento.idMedicamento

