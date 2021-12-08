//Exercícios de escrita de código - Ex2

//a. Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

const pessoa1 = {
    nome: "Guilherme" ,
    idade: 27 ,
    profissão: "Engenheiro Civil"
}

const pessoa2 = {
    nome: "Luana" ,
    idade: 20 ,
    profissão: "Estudante"
}

//b. Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
/* 
1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão` */

const minhaFuncao = (objeto) => {
    const lista = []
    lista.push(objeto.nome, objeto.nome.length, objeto.idade, objeto.profissão, objeto.profissão.length)
    return lista
}

console.log(minhaFuncao(pessoa1))
console.log(minhaFuncao(pessoa2))
