/*create database db_education;
use db_education;

create table tb_tema
(id bigint(50)auto_increment,
educacao varchar(255) not null,
conteudo varchar(255) not null,
primary key(id));/

/*create table tb_usuario
(id bigint (50) auto_increment,
nome varchar (50) not null unique,
usuario varchar (50) not null unique,
senha varchar (50) not null,
foto varchar (255) default "Não inserida",
primary key (id));

create table tb_postagem
(id bigint (50) auto_increment,
titulo varchar (255) not null,
conteudo varchar (255) not null,
data_hora datetime,
comentario varchar (255) default "Sem comentarios",
tema_id bigint,
usuario_id bigint,
primary key(id),
foreign key (tema_id) references tb_tema(id),
foreign key (usuario_id) references tb_usuario(id));
*/
