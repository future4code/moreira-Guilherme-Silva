# Exercício Serviços de Backend

## Exercício 2

No seu banco de dados, crie uma tabela para guardar as seguintes informações de endereço de um usuário:

**Resp:**

CREATE TABLE Zipcodes (
	CEP VARCHAR(255) PRIMARY KEY,
    Logradouro VARCHAR(255),
    Numero VARCHAR(255),
    Complemento VARCHAR(255),
    Bairro VARCHAR(255),
    Cidade VARCHAR(255),
    Estado VARCHAR(2)
);

