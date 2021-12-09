//Exercícios de escrita de código - Ex2

//a. Escreva um programa que imprime cada um dos valores do array original.
const imprimirArray = (array) => {
    for (num of array) {
        console.log(num)
    }
}

//b. Escreva um programa que imprime cada um dos valores do array original divididos por 10
const imprimirArrayPor10 = (array) => {
    for (num of array) {
        console.log(num / 10)
    }
}

//c. Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
const imprimirPares = (array) => {
    const lista =[]
    for (num of array) {
        if (num % 2 === 0) {
            lista.push(num)
        }
    }
    console.log(lista)
}

//d. Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.
const imprimirString = (array) => {
    const lista =[]
    for (let i = 0; i < array.length; i++) {
        console.log(`O elemento do índex ${i} é: ${array[i]}`)
    }  
}

//e. Escreva um programa que imprima no console o maior e o menor números contidos no array original
const imprimirMaiorMenor = (array) => {
    let maior = array[0]
    let menor = array[0]
    for (num of array) {
        if (num > maior) {
            maior = num
        } else if (num < menor) {
            menor = num
        }
    }
    console.log(`O maior número é: ${maior} e o menor é ${menor}`)
}


lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
imprimirArray(lista)
imprimirArrayPor10(lista)
imprimirPares(lista)
imprimirString(lista)
imprimirMaiorMenor(lista)