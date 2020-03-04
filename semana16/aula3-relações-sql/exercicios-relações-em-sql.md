#1. Crie as tabelas das entidades, bem como suas relações. As informações que cada entidade deve ter são as seguintes:

### Livros
´´´
CREATE TABLE books (
id int unsigned unique not null,
title varchar(255) not null,
author_id int unsigned not null,
publisher_id int unsigned not null,
year DATE not null,
PRIMARY KEY (id),
FOREIGN KEY (author_id) REFERENCES authors(id),
FOREIGN KEY (publisher_id) REFERENCES publishers(id)
);
´´´

### Autores
´´´
CREATE TABLE authors (
id int unsigned unique not null,
firstName varchar(45) not null,
lastName varchar(45) not null,
PRIMARY KEY (id)
);
´´´

### Editoras
´´´
CREATE TABLE publishers (
id int unsigned unique not null,
name varchar(45) not null,
city varchar(45) not null,
FoundationDate datetime not null,
PRIMARY KEY (id)
);
´´´

### Usuários
´´´
CREATE TABLE users (
id int unsigned unique not null,
firstName varchar(45) not null,
lastName varchar(45) not null,
nationality varchar(45) not null,
birthDate date not null,
PRIMARY KEY (id)
);
´´´

### Livros dos Usuários
´´´
CREATE TABLE users_books (
 user_id INT unsigned unique not null,
 book_id INT unsigned unique not null,
 PRIMARY KEY (user_id, book_id),
 FOREIGN KEY (user_id) REFERENCES users(id),
 FOREIGN KEY (book_id) REFERENCES books(id)
);
´´´


#2. Popule as tabelas.

### Usuários
´´´
INSERT INTO users 
VALUES 	(1,'Igor','Alves','Brasileiro', '1996-05-10'),
    	(2,'Elon','Musk','Sul-Africano','1971-06-28'),
    	(3,'Linus','Torvalds','Finlandês','1969-12-28'),
	(4,'William','Gates','Americano','1955-10-28'),
    	(5,'Guido','Rossum','Holandês','1956-01-31'),
	(6,'Steve','Jobs','Americano','1955-02-24'),
	(7,'Jeff','Bezos','Americano','1964-01-12'),
	(8,'Mark','Zuckerberg','Americano','1984-05-14'),
	(9,'Larry','Ellison','Americano','1944-08-17'),
	(10,'Kevin','Mitnick','Americano','1963-08-06');
´´´
  
### Livros de Usuários
´´´
INSERT INTO users_books 
VALUES 	(1,8),
    	(2,1),
    	(3,2),
        (3,3),
	(3,4),
	(4,5),
	(4,8),
	(5,8),
    	(5,9),
	(6,8),
	(7,6),
	(8,8),
	(9,7),
	(10,9); 
´´´

#3.   Execute queries de acordo a obter as seguintes informações:

###1. Todos os livros de um autor específico a sua escolha, mostrando pelo menos o nome do autor e o nome do livro
´´´
select concat(firstName, ' ', lastName) Author, title
from books
join authors
on books.author_id = authors.id
where firstName = 'Dan' and lastName = 'Brown';
´´´

###2. Todos os livros cujo primeiro nome do autor começa com A, mostrando o nome completo do autor e do livro
´´´
select concat(firstName, ' ', lastName) Author, title
from books
join authors
on books.author_id = authors.id
where firstName like 'a%';
´´´

###3. Quantos livros cada autor possui na biblioteca, mostrando pelo menos o nome do autor e o número de livros
´´´
select concat(firstName, ' ', lastName) Author, count(title)
from books
join authors
on books.author_id = authors.id
group by Author;
´´´

###4. O livro mais alugado de todos, mostrando pelo menos o nome do livro
´´´
select title, count(book_id) rented
from users_books
join books
on users_books.book_id = books.id
group by title
limit 1;
´´´

###5. Quantos livros cada usuário alugou, mostrando pelo menos o nome do usuário e o número de livros
´´´
select concat(firstName, ' ', lastName) fullName, count(user_id) rented
from users_books
join users
on users_books.user_id = users.id
group by fullName;
´´´

###6. Todos os livros de editoras fundadas antes de 1990, mostrando pelo menos o nome do livro, o nome da editora e a data de fundação
´´´
select title, name, FoundationDate 
from books
join publishers
on books.publisher_id = publishers.id
where datediff(curdate(), publishers.FoundationDate) > 10958;
´´´

###7. O usuário mais velho que alugou um livro específico a sua escolha
´´´
select concat(firstName, ' ', lastName) User,  datediff(curdate(), users.birthDate)/365 Age 
from users
join users_books
on users.id = users_books.user_id
where users_books.book_id = 8
order by Age desc
limit 1;
´´´

###8. Qual foi o país que alugou mais livros na biblioteca (olhar pra nacionalidade dos usuários)
´´´
select nationality, count(book_id) rents
from users
join users_books
on users.id = users_books.user_id
group by nationality
order by rents desc
limit 1;
´´´

###9. As duas editoras que possuem mais livros alugados por pessoas com mais de 20 anos
´´´
select name, count(book_id) rents
from publishers
join books
on books.publisher_id = publishers.id
join users_books
on users_books.book_id = books.id
join users
on users.id = users_books.user_id
where datediff(curdate(), users.birthDate)/365 > 20
group by name
order by rents desc
limit 2;
´´´

###10. Livros alugados que foram lançados antes da data de nascimento do usuário que o alugou
´´´
select title, year, users.birthDate
from books
join users_books
on users_books.book_id = books.id
join users
on users.id = users_books.user_id
where datediff(curdate(), books.year)/365 > datediff(curdate(), users.birthDate)/365;
´´´