create database earlyenglish;

use earlyenglish;

create table blog(
	id int auto_increment primary key,
    titulo VARCHAR(100) not null,
    autor VARCHAR(45) not null,
    conteudo text,
    created_ate TIMESTAMP DEFAULT current_timestamp
);

select * from blog;
