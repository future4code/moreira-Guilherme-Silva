//Exercícios de escrita de código - Ex2

//a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
const somar = (num1, num2) => {
    const resultado = num1 + num2
    return resultado
}

const num1 = Number(prompt("Digite o primeiro número"))
const num2 = Number(prompt("Digite o segundo número"))
console.log(`A soma dos números ${num1} e ${num2} é ${somar(num1, num2)}`)

//b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
const comparar = (num1, num2) => {
    const resultado = num1 >= num2
    return resultado
}

console.log(`O ${num1} é maior ou igual ao ${num2}? ${comparar(num1, num2)}`)

//c. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
const par = num1 => {
    const resultado = num1 % 2
    return resultado == 0
}

console.log(`O ${num1} par? ${par(num1)}`)

//d. Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

const transformar = texto => {
    const tamanho = texto.length
    const maiuscula = texto.toUpperCase()
    return [tamanho, maiuscula]
}

const frase = prompt("Digite um texto")

console.log(`A frase possui ${transformar(frase)[0]} de tamanho`)
console.log(`A frase maiucula fica: ${transformar(frase)[1]}`)