#1. Cidades


###1. As 5 cidades com maior população.
```
select Name, Population
from city
order by Population DESC
limit 5;
```

###2. A média populacional em cada distrito.
```
select District, AVG(Population)
from city
group by District;
```

###3. A quantidade de cidades por distrito.
```
select District, count(District)
from city
group by District;
```

###4. Os 10 países (countryCode) com mais cidades, em ordem decrescente;
```
select CountryCode, count(CountryCode)
from city
group by CountryCode
order by count(CountryCode) DESC
limit 10;
```


#2. Países


###1. Os 100 primeiros países com mais de 100 mil habitantes.
```
select Name
from country
where Population > 100000
limit 100;
```

###2. A quantidade de países com mais de 5 milhões de habitantes.
```
select count(*)
from country
where Population > 5000000;
```

###3. A soma do valor de todas as populações da Asia, com o Alias "Soma de população".
```
select Continent, sum(Population) as 'Soma de população'
from country
where Continent = 'Asia';
```

###4. A quantidade de Repúblicas e Monarquias no mundo.
```
select GovernmentForm, count(*)
from country
where GovernmentForm like '%Monarchy%' or GovernmentForm like '%Republic%'
group by GovernmentForm;
```

###5. A forma de governo que mais se repete e a quantidade de vezes que aparece.
```
select GovernmentForm, count(GovernmentForm)
from country
group by GovernmentForm
order by count(GovernmentForm) DESC
limit 1;
```

###6. A média de população de cada continente.
```
select Continent, AVG(Population)
from country
group by Continent;
```

###7. Os dez últimos países a conquistar independência.
```
select Name,  IndepYear 
from country
order by IndepYear DESC
limit 10;
```

###8. A média de expectativa de vida de cada continente. Importante: o nome dos continentes deve ser exibido em caixa baixa (letras minúsculas).
```
select lower(Continent), avg(LifeExpectancy)
from country
group by Continent;
```

###9. Os 3 continentes mais extensos em território.
```
select Continent,  SurfaceArea 
from country
order by SurfaceArea DESC
limit 3;
```


#3. Escrita

```
insert into films (film_id, title, description, release_year, length, rating, special_features)
values (10	, 'The Godfather', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 1972, 153, 'R', 'Trailers,Deleted Scenes'),
	   (9, 'Pulp Fiction', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 1994, 140, 'NC-17', 'Commentaries,Deleted Scenes'),
	   (8, 'Fight Club', 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.', 1999, 131, 'NC-17', 'Trailers,Commentaries'),
       (7, 'Saving Private Ryan', 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.', 1998, 149, 'R', 'Trailers,Commentaries,Deleted Scenes'),
       (6, 'Interstellar', 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity survival.', 2014, 149, 'PG', 'Commentaries');
```

###1. Adicione uma nova coluna chamada "watched", não nula, com o valor padrão de "false".
```
alter table films
add watched bool not null default FALSE;
```

###2. Atualize todas as entradas no banco seguindo a regra: para maiores de 13 anos o valor de watched deve ser "true".
```
update films
set watched = true
where rating = 'R' or rating = 'NC-17';
```

###3. Adicione uma nova coluna chamada "lucky_number", não nula, com valor padrão de 0.
```
alter table films
add lucky_number int not null default 0;
```

###4. Atualize todas as entradas do banco atribuindo um número aleatório entre 1-1000 (incluindo os extremos) para a coluna "lucky_number" de cada um dos filmes, **atenção: este número deve ser inteiro, sem casas decimais.**
```
update films
set lucky_number = FLOOR(RAND()*(10-5+1)+5);
```

