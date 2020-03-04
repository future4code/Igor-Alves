#1. Cinema - Atores

###a) O nome e sobrenome de todos os atores que Contenham a letra a no sobrenome:
```
select first_name, last_name
from actors
where last_name like "%A%";
```

###b) Sobrenome de todos os atores chamados DAN ou JULIA:
```
select last_name
from actors
where first_name = "DAN" OR first_name = "JULIA";
```

###c) O nome e o sobrenome de todos os atores que se chamem ANGELINA OU contenham b no nome:
```
select first_name, last_name
from actors
where first_name = "ANGELINA" OR first_name like "%b%";
```

###d) Agora a ideia é que vocês criem uma cópia dessa tabela no seu banco de dados:
```
use `bouman-igor`;


create table actors(
actor_id smallint(5) unsigned primary key,
first_name varchar(45) not null,
last_name varchar(45) not null
);


insert into actors (actor_id, first_name, last_name)
values (1, 'IGOR', 'ALVES');
```


#2. Cinema - Filmes


###a) O título e a descrição de todos os filmes que duram mais de duas horas.
```		
select title, description
from films
where length > 120;
```

###b) A descrição, o ano de lançamento e a classificação etária de todos os filmes descritos como documentário.
```
select description, release_year, rating
from films
where description like '%DOCUMENTARY%';
```

###c) O título, o ano de lançamento e as partes especiais dos filmes com classificação para maiores de 18 anos que comecem com a letra a.
```
select title, release_year, special_features
from films
where rating = 'NC-17' and title like 'a%';
```

###d) Todos os dados dos filmes que tenham trailers, sejam para maiores de 13 anos. e contenham a letra d.
```
select film_id, title, description, release_year, length, rating, special_features
from films
where special_features = 'Trailers' and rating = 'PG-13' and title like '%d%';
```

###e) Agora a ideia é que vocês criem uma cópia dessa tabela no seu banco de dados
```
use `bouman-igor`;

create table films(
film_id int(10) unsigned not null primary key,
title varchar(128) not null,
description varchar(255),
release_year year(4),
length int(11), 
rating enum('G','PG', 'PG-13', 'R', 'NC-17'),
special_features set('Trailers', 'Commentaries', 'Deleted Scenes', 'Behind the Scenes')
);


insert into films (film_id, title, description, release_year, length, rating, special_features)
values (382	, 'GRIT CLOCKWORK', 'A Thoughtful Display of a Dentist And a Squirrel who must Confront a Lumberjack in A Shark Tank', 2006, 137, 'PG', 'Trailers,Deleted Scenes'),
	   (522, 'LIFE TWISTED', 'A Thrilling Reflection of a Teacher And a Composer who must Find a Man in The First Manned Space Station', 2006, 137, 'NC-17', 'Commentaries,Deleted Scenes'),
	   (531, 'LOSE INCH', 'A Stunning Reflection of a Student And a Technical Writer who must Battle a Butler in The First Manned Space Station', 2006, 137, 'R', 'Trailers,Commentaries'),
       (676, 'PHILADELPHIA WIFE', 'A Taut Yarn of a Hunter And a Astronaut who must Conquer a Database Administrator in The Sahara Desert',	2006, 137, 'PG-13', 'Trailers,Commentaries,Deleted Scenes'),
       (689, 'POLLOCK DELIVERANCE', 'A Intrepid Story of a Madman And a Frisbee who must Outgun a Boat in The Sahara Desert', 2006, 137, 'PG', 'Commentaries');	
```	