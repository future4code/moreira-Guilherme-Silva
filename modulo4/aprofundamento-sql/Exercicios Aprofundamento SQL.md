# Exercícios de Banco de Dados e Introdução a SQL

## Exercício 1

a) **Resp:** Exclui a coluna de salário

b)**Resp:** Altera o nome da coluna de gender para sex

c)**Resp:** Altera o typo do coluna gender para 255 caricatures

d) *Agora,  altere a coluna* *gender* *da tabela* *ACTOR* *para que ele aceite strings com até 100 caracteres*

**Resp:** ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

## Exercício 2

a) *Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`*

**Resp:** UPDATE Actor 
	SET name = "Moacyr Franco", birth_date = "2020-02-10"
    WHERE id = "003";

b) *Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.*

**Resp:** UPDATE Actor 
	SET name = "JULIANA PAES"
    WHERE name = "Juliana Paes";

UPDATE Actor 
	SET name = "JJuliana Paes"
    WHERE name = "JULIANA PAES";

c) *Escreva uma query que atualize todas as informações do ator com o id `005`*

**Resp:** UPDATE Actor 
	SET name = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000, gender = "male"
	WHERE id = "005";

d) *Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.*

**Resp:** Não houve erro, porém 0 linhas foram afetadas

## Exercício 3

a) *Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`*

**Resp:** DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b) *Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*

**Resp:** DELETE FROM Actor WHERE
	gender = "male" AND
    salary > 1000000;

## Exercício 4

a) *Escreva uma query que pegue o maior salário de todos os atores e atrizes*

**Resp:** SELECT MAX(salary) FROM Actor;

b) *Escreva uma query que pegue o menor salário das atrizes*

**Resp:** SELECT MIN(salary) FROM Actor WHERE gender = "female";

c) *Escreva uma query que pegue a quantidade de atrizes*

**Resp:** SELECT COUNT(*) From Actor WHERE gender = "female";

d) *Escreva uma query que pegue a soma de todos os salários*

**Resp:** SELECT SUM(salary) FROM Actor;

## Exercício 5

a) *Releia a última query. Teste-a. Explique o resultado com as suas palavras*

**Resp:** A query faz uma contagem e agrupa nas variáveis de gender, ous seja, 3 male e 2 female

b) *Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*

**Resp:** SELECT id, name FROM Actor ORDER BY name DESC;

c) *Faça uma query que retorne todos os atores ordenados pelo salário*

**Resp:** SELECT * FROM Actor ORDER BY salary ASC;

d) *Faça uma query que retorne os atores com os três maiores salarios*

**Resp:** SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

e) *Faça uma query que retorne a média de salário por gênero*

**Resp:** SELECT AVG(salary), gender FROM Actor GROUP BY gender;

## Exercício 6

a) *Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.*

**Resp:** ALTER TABLE Filmes ADD playing_limit_date DATE;

b) *Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*

**Resp:** ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;

c) *Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*

**Resp:** UPDATE Filmes SET playing_limit_date = "2022-05-05" WHERE id = "001";

UPDATE Filmes SET playing_limit_date = "2022-01-01" WHERE id = "002";

d) *Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*

**Resp:** Não é apresentado erro, porém nenhuma linha é afetada