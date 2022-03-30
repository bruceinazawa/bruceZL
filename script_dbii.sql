drop table contratadas;
create table contratadas(
id serial PRIMARY KEY,
razaosocial varchar(200)
numfunc int);

drop table produto;
create table produto(
id serial PRIMARY KEY
nome varchar(100),
idempresa int,
preco real
);

--relacionamentos
ALTER TABLE produto add constraint BgStore FOREIGN KEY (idempresa) REFERENCES  contratadas(id)

--inserts
insert into contratadas(razaosocial,numfunc) values('Volksvagen', 1000);
insert into contratadas(razaosocial,numfunc) values('assai', 300);
select * from contratadas
insert into produto(nome,idempresa) values('carros',5);
select * from produto;
