//Exercícios de escrita de código - Desafio 1

//a. Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro
const imprimir = texto => {
    console.log(texto)
}
imprimir("Texto de Exemplo do item a")
//b. Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno. Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

const somar = (num1, num2) => {
    const resultado = num1 + num2
    imprimir(resultado)
}

somar(50, 10)