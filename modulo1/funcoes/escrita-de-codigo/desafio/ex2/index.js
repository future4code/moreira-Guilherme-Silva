//Exercícios de escrita de código - Desafio 2

const pitagoras = (cat1, cat2) => {
    return (cat1**2 + cat2**2)**(1/2)
}

const num1 = Number(prompt("Digite o primeiro número"))
const num2 = Number(prompt("Digite o segundo número"))

console.log(`A hipotenusa vale ${pitagoras(num1, num2)}`)


