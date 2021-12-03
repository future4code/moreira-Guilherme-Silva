//Exercícios de escrita de código - Ex3

function somar(num1, num2) {
    return num1 + num2
}

const subtrair = (num1, num2) => {
    return num1 - num2
}

const multiplicar = (num1, num2) => {
    return num1 * num2
}

function dividir(num1, num2) {
    return num1 / num2
}

const num1 = Number(prompt("Digite o primeiro número"))
const num2 = Number(prompt("Digite o segundo número"))

console.log(`Números inseridos: ${num1} e ${num2}`)
console.log(`Soma: ${somar(num1, num2)}`)
console.log(`Diferença: ${subtrair(num1, num2)}`)
console.log(`Multiplicação: ${multiplicar(num1, num2)}`)
console.log(`Divisão: ${dividir(num1, num2)}`)
