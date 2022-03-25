// a)

/* const minhaString: string = 5 */

// Um errro é gerado informando que um número não pode ser atribuido a uma variável string

// b)

/* const meuNumero: number | string = "olá" */

// Para criar uma variável que aceite mais de um tipo de valor, basta utilizar o chamado union type, inserindo uma | entre os tipos

// c)

/* type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
} */

// d)

enum cores {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    AZULESCURO = "azul escuro",
    VIOLETA = "violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: cores
}

const paulo: Pessoa = {
    nome: "Paulo",
    idade: 28,
    corFavorita: cores.AZUL
}

console.log(paulo)
