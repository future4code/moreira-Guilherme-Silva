# Exercícios de Banco de Dados e Introdução a SQL

## Exercício 1

*a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*

**Resp:** id, name e gender são VARCHAR pois são textos, sendo que id e name podem ter até 255 caracteres e gender 6. Birth_date é DATE pelo fado de ser uma data. Além disso o id é usado como chave primária, enquanto os outros não aceitam valores nulos.

*b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*

**Resp:** SHOW DATABASE informa todas as  informações das bases e SHOW TABLES mostra todas as tabelas criadas.

*c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*

**Resp:** DESCRIBE mostra as principais informações das colunas das tabelas, como nome, o tipo, se é nulo, se é chave primária e valor padrão

## Exercício 2

*a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*

**Resp:**  INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);

b) *Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*

**Resp:** Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'. Não podemos repetir um valor declarado como chave primária.

c) **Resp**: Error Code: 1136. Column count doesn't match value count at row 1. Foi declararo 3 colunas mas passado 5 valores

d) **Resp:** Error Code: 1364. Field 'name' doesn't have a default value. Name não pode ficar sem valor

e) **Resp:** Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1. A data foi passada como número e não texto.

## Exercício 3

a) *Escreva uma query que retorne todas as informações das atrizes*

**Resp:** SELECT * FROM Actor WHERE gender = "female"

b) *Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*

**Resp::** SELECT salary FROM Actor WHERE name = "Tony Ramos"

c) *Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*

**Resp:** SELECT * FROM Actor WHERE gender = "invalid. Náo há nenhum valor inválido

d) *Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*

**Resp:** SELECT id, name, salary FROM Actor WHERE salary < 500000

e) **T*ente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta*

**Resp:** Error Code: 1054. Unknown column 'nome' in 'field list'. O mySQL não reconhece a coluna "nome", pois o valor certo é "name"

SELECT id, name from Actor WHERE id = "002"

## Exercício 4

a) *Explique com as suas palavras a query acima*

**Resp:** a query trás todas as informações dos atores e atrizes que tem salário maior que 300000 (salary > 300000) e (AND) cujo nome começa com A ou com J (name LIKE "A%" OR name LIKE "J%"). O operador OR garante que é uma condição ou outra, enquanto toda essa primeira expressão em () com o AND garante que seria uma das duas primeiras e a última.

b) *Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00*

**Resp:** SELECT * from Actor WHERE name NOT LIKE "A%" AND salary > 350000

c) *Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.*

**Resp:** SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";

d) *Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*

**Resp:** SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;

## Exercício 5

a) *Escreva a query que cria essa tabela. Para sinopse, utilize o tipo* *TEXT**, pesquise sobre ele se precisar. Explique a query resumidamente.*

**Resp:** CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);

b) **Resp:**  INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);

c) **Resp:**  INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);

d) **Resp:**  INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02",
  8
);

e) **Resp:** INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "004", 
  "Cidade de Deus",
  "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.",
  "2002-08-30",
  8
);

## Exercício 6

a) Retorne o id, título e avaliação a partir de um id específico;

**Resp:** SELECT id, nome, avaliacao FROM Filmes WHERE id = "003"

b) Retorne um filme a partir de um nome específico;

**Resp:** SELECT * FROM Filmes WHERE nome = "Cidade de Deus"

c) Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`

**Resp:** SELECT id, nome, sinopse FROM Filmes WHERE avaliacao > 7

## Exercício 7

a) Retorna um filme cujo título contenha a palavra `vida`

**Resp:** SELECT id, nome, sinopse FROM Filmes WHERE nome LIKE "%vida%"

b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.

**Resp:** SELECT id, nome, sinopse FROM Filmes WHERE nome LIKE "%vida%" OR sinopse LIKE "%vida%";

c) Procure por todos os filmes que já tenham lançado

**Resp:** SELECT * FROM Filmes WHERE data_lancamento < "2022-08-20";

d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.

**Resp:** SELECT * FROM Filmes WHERE (data_lancamento < "2022-08-20") AND (avaliacao > 7) AND (nome LIKE "%vida%" OR sinopse LIKE "%vida%");

