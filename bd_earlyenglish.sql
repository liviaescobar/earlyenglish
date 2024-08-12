create database earlyenglish;

use earlyenglish;

create table blog(
	id int auto_increment primary key,
    titulo text not null,
    autor text not null,
    conteudo text,
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