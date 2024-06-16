create database earlyenglish;

use earlyenglish;

create table blog(
	id int auto_increment primary key,
    titulo VARCHAR(100) not null,
    autor VARCHAR(45) not null,
    conteudo VARCHAR(255) not null
);

alter table blog 
add column (created_ate TIMESTAMP DEFAULT current_timestamp);

delete from blog
where id = "21";

select * from blog;
