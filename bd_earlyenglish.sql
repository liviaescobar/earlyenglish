create database earlyenglish;

use earlyenglish;

create table blog(
	id int auto_increment primary key,
    titulo longtext not null,
    autor longtext not null,
    conteudo longtext,
    arquivo VARCHAR(20),
    created_ate TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE users(
	id int not null auto_increment primary key, 
    name varchar(255) not null,  
    email varchar (255) not null unique,
    sexo enum ('masculino', 'feminino'),
    tipo enum ('admin', 'normal') default 'normal',
    password varchar (255) not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
    );
     
SELECT * from users;
