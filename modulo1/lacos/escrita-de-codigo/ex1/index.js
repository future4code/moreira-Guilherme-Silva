//Exercícios de escrita de código - Ex1

const numBichos = Number(prompt("Quantos animais de estimação você possui?"))

if (numBichos <= 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    let lista =[]
    for (let i = 0; i < numBichos; i++) {
        let nome = prompt("Qual o nome?")
        lista.push(nome)
    }
    console.log(lista)
}